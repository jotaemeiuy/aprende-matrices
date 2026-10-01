/**
 * views-mul.js — Vista de multiplicación de matrices
 * Selección de fila/columna, animación de líneas y cálculo paso a paso
 */
// ===== MULTIPLICATION VIEW FUNCTIONS =====
// Extracted from app.js — references shared state via App.state, App.el, App.*

// Inicializa la vista de multiplicación con matrices vacías
function initMulView() {
  App.state.matrixAData = [];
  App.state.matrixBData = [];
  App.state.selectedRow = -1;
  App.state.selectedCol = -1;
  App.state.resultData = null;

  for (let i = 0; i < App.state.currentDim; i++) {
    App.state.matrixAData[i] = [];
    App.state.matrixBData[i] = [];
    for (let j = 0; j < App.state.currentDim; j++) {
      App.state.matrixAData[i][j] = 0;
      App.state.matrixBData[i][j] = 0;
    }
  }

  App.renderMatrix(App.el.matrixA, App.state.matrixAData, 'A', {
    onCellClick: (i, j, e) => {
      if (!App.state.isAnimating) {
        if (App.state.selectedRow === i) App.state.selectedRow = -1;
        else App.state.selectedRow = i;
        App.updateMulSelections();
        if (App.state.selectedRow >= 0 && App.state.selectedCol >= 0) App.runMulAnimation();
      }
    },
    onCellTouch: (i, j) => {
      if (!App.state.isAnimating) {
        if (App.state.selectedRow === i) App.state.selectedRow = -1;
        else App.state.selectedRow = i;
        App.updateMulSelections();
        if (App.state.selectedRow >= 0 && App.state.selectedCol >= 0) App.runMulAnimation();
      }
    }
  });

  App.renderMatrix(App.el.matrixB, App.state.matrixBData, 'B', {
    onCellClick: (i, j, e) => {
      if (!App.state.isAnimating) {
        if (App.state.selectedCol === j) App.state.selectedCol = -1;
        else App.state.selectedCol = j;
        App.updateMulSelections();
        if (App.state.selectedRow >= 0 && App.state.selectedCol >= 0) App.runMulAnimation();
      }
    },
    onCellTouch: (i, j) => {
      if (!App.state.isAnimating) {
        if (App.state.selectedCol === j) App.state.selectedCol = -1;
        else App.state.selectedCol = j;
        App.updateMulSelections();
        if (App.state.selectedRow >= 0 && App.state.selectedCol >= 0) App.runMulAnimation();
      }
    }
  });

  App.renderResultGrid(App.el.resultGrid);
  App.hideBalloon();
}

// ===== SELECCIÓN =====
// Actualiza clases CSS de selección en inputs
App.updateMulSelections = function() {
  App.el.matrixA.querySelectorAll('input').forEach(input => {
    input.classList.remove(App.CSS.SELECTED_ROW);
    if (parseInt(input.dataset.row) === App.state.selectedRow) {
      input.classList.add(App.CSS.SELECTED_ROW);
    }
  });

  App.el.matrixB.querySelectorAll('input').forEach(input => {
    input.classList.remove(App.CSS.SELECTED_COL);
    if (parseInt(input.dataset.col) === App.state.selectedCol) {
      input.classList.add(App.CSS.SELECTED_COL);
    }
  });
}

// Limpia selección, canvas y globo
function clearSelection() {
  App.state.selectedRow = -1;
  App.state.selectedCol = -1;
  App.state.isAnimating = false;
  App.updateMulSelections();
  App.el.animCtx.clearRect(0, 0, App.el.animCanvas.width, App.el.animCanvas.height);
  App.hideBalloon();

  document.querySelectorAll(`.${App.CSS.RESULT_CELL}`).forEach(cell => {
    cell.classList.remove(App.CSS.ACTIVE_CELL);
  });
}

// ===== ANIMACIÓN =====
// Anima líneas de fila A y columna B convergiendo a la celda resultado
App.runMulAnimation = function() {
  if (App.state.selectedRow < 0 || App.state.selectedCol < 0 || App.state.isAnimating) return;
  App.state.isAnimating = true;

  const rowInputs = App.getRowElements(App.state.selectedRow, App.el.matrixA);
  const colInputs = App.getColElements(App.state.selectedCol, App.el.matrixB);
  const targetCell = App.el.resultGrid.querySelector(
    `.${App.CSS.RESULT_CELL}[data-row="${App.state.selectedRow}"][data-col="${App.state.selectedCol}"]`
  );

  if (!rowInputs.length || !colInputs.length || !targetCell) return;

  const rowCenter = App.getElementCenter(rowInputs[Math.floor(rowInputs.length / 2)]);
  const colCenter = App.getElementCenter(colInputs[Math.floor(colInputs.length / 2)]);
  const targetPos = App.getElementCenter(targetCell);

  const lineAY = rowCenter.y;
  const lineAStartX = rowCenter.x - (rowInputs[0].offsetWidth * rowInputs.length / 2) - 10;
  const lineAEndX = targetPos.x;

  const lineBX = colCenter.x;
  const lineBStartY = colCenter.y - (colInputs[0].offsetHeight * colInputs.length / 2) - 10;
  const lineBEndY = targetPos.y;

  const ctx = App.el.animCtx;
  ctx.clearRect(0, 0, App.el.animCanvas.width, App.el.animCanvas.height);

  let phase = 1;
  let lineAProgress = 0;
  let lineBProgress = 0;
  const lineASpeed = 0.03;
  const lineBSpeed = 0.03;

  function animate() {
    ctx.clearRect(0, 0, App.el.animCanvas.width, App.el.animCanvas.height);

    if (phase === 1) {
      lineAProgress += lineASpeed;
      if (lineAProgress >= 1) {
        lineAProgress = 1;
        phase = 2;
      }
      const currentEndX = lineAStartX + (lineAEndX - lineAStartX) * lineAProgress;
      App.drawGlowLine(ctx, lineAStartX, lineAY, currentEndX, lineAY, '#00d4ff', 3);
    }

    if (phase === 2) {
      App.drawGlowLine(ctx, lineAStartX, lineAY, lineAEndX, lineAY, '#00d4ff', 3);

      lineBProgress += lineBSpeed;
      if (lineBProgress >= 1) {
        lineBProgress = 1;
        phase = 3;
      }
      const currentEndY = lineBStartY + (lineBEndY - lineBStartY) * lineBProgress;
      App.drawGlowLine(ctx, lineBX, lineBStartY, lineBX, currentEndY, '#ff6464', 3);
    }

    if (phase === 3) {
      App.drawGlowLine(ctx, lineAStartX, lineAY, lineAEndX, lineAY, '#00d4ff', 3);
      App.drawGlowLine(ctx, lineBX, lineBStartY, lineBX, lineBEndY, '#ff6464', 3);
      App.drawGlowDot(ctx, targetPos.x, targetPos.y, 10, '#ffffff');

      phase = 4;
      setTimeout(() => {
        Particles.burst(targetPos.x, targetPos.y, 50, 'rgb(0, 255, 136)');
        showCalcBalloon(targetPos.x, targetPos.y);
      }, 300);
    }

    if (phase === 4 || phase === 5) {
      App.drawLine(ctx, lineAStartX, lineAY, lineAEndX, lineAY, 'rgba(0, 212, 255, 0.4)', 2);
      App.drawLine(ctx, lineBX, lineBStartY, lineBX, lineBEndY, 'rgba(255, 100, 100, 0.4)', 2);
    }

    if (phase < 5) {
      requestAnimationFrame(animate);
    } else {
      App.fadeOutLines(ctx, App.el.animCanvas, (alpha) => {
        App.drawGlowLine(ctx, lineAStartX, lineAY, lineAEndX, lineAY, `rgba(0, 212, 255, ${alpha})`, 2);
        App.drawGlowLine(ctx, lineBX, lineBStartY, lineBX, lineBEndY, `rgba(255, 100, 100, ${alpha})`, 2);
      }, () => {
        App.state.selectedRow = -1;
        App.state.selectedCol = -1;
        App.updateMulSelections();
        App.state.isAnimating = false;
      });
    }

    if (phase === 4) {
      setTimeout(() => { phase = 5; }, 1000);
    }
  }

  animate();
}

// ===== GLOBO DE CÁLCULO =====
// Muestra globo con el cálculo del producto punto (fila × columna)
function showCalcBalloon(x, y) {
  const row = App.state.selectedRow;
  const col = App.state.selectedCol;
  const { sum, steps } = MatrixOps.multiplyStep(App.state.matrixAData, App.state.matrixBData, row, col);
  const cleanSum = MatrixOps.roundSmart(sum);
  const stepText = steps.map(s => `${s.a}·${s.b}`).join(' + ');

  App.el.balloon.innerHTML = `
    <div>${stepText}</div>
    <div class="${App.CSS.BALLOON_RESULT}">= ${cleanSum}</div>
  `;
  App.positionBalloon(App.el.balloon, x, y);

  setTimeout(() => {
    App.hideBalloon();
    App.showResultInCell(App.el.resultGrid, sum, row, col);
  }, 2500);
}
