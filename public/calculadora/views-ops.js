/**
 * views-ops.js — Vistas de Suma, Resta y Traza
 * Selección de celdas, animaciones y cálculos para operaciones elementales
 */

function initAddSubView(op) {
  App.state.matrixAData = [];
  App.state.matrixBData = [];
  App.state.selectedCellA = null;
  App.state.selectedCellB = null;
  App.state.resultData = null;

  for (let i = 0; i < App.state.currentDim; i++) {
    App.state.matrixAData[i] = [];
    App.state.matrixBData[i] = [];
    for (let j = 0; j < App.state.currentDim; j++) {
      App.state.matrixAData[i][j] = 0;
      App.state.matrixBData[i][j] = 0;
    }
  }

  let matA, matB, resultGridEl, balloonEl;
  if (op === 'add') {
    matA = App.el.matrixAAdd;
    matB = App.el.matrixBAdd;
    resultGridEl = App.el.resultAdd;
    balloonEl = App.el.balloonAdd;
  } else {
    matA = App.el.matrixASub;
    matB = App.el.matrixBSub;
    resultGridEl = App.el.resultSub;
    balloonEl = App.el.balloonSub;
  }

  const cellHandler = (name) => (i, j) => {
    if (App.state.isAnimating) return;
    selectCell(name, i, j);
  };

  App.renderMatrix(matA, App.state.matrixAData, 'A', {
    onInput: (i, j, v) => { App.state.matrixAData[i][j] = v; },
    onCellClick: cellHandler('A'),
    onCellTouch: cellHandler('A')
  });
  App.renderMatrix(matB, App.state.matrixBData, 'B', {
    onInput: (i, j, v) => { App.state.matrixBData[i][j] = v; },
    onCellClick: cellHandler('B'),
    onCellTouch: cellHandler('B')
  });
  App.renderResultGrid(resultGridEl);
  balloonEl.classList.add(App.CSS.HIDDEN);
  balloonEl.classList.remove(App.CSS.VISIBLE);
}

function initTraceView() {
  App.state.matrixAData = [];
  App.state.selectedDiagCells = new Set();
  App.state.resultData = null;

  for (let i = 0; i < App.state.currentDim; i++) {
    App.state.matrixAData[i] = [];
    for (let j = 0; j < App.state.currentDim; j++) {
      App.state.matrixAData[i][j] = 0;
    }
  }

  renderMatrixTrace(App.el.matrixATrace, App.state.matrixAData);
  App.el.traceResultValue.textContent = '?';
  App.el.traceResultValue.classList.remove(App.CSS.CALCULATED);
  App.el.balloonTrace.classList.add(App.CSS.HIDDEN);
  App.el.balloonTrace.classList.remove(App.CSS.VISIBLE);
  App.el.animCtxTrace.clearRect(0, 0, App.el.animCanvasTrace.width, App.el.animCanvasTrace.height);
}

function renderMatrixTrace(container, data) {
  App.renderMatrix(container, data, 'A', {
    onInput: (i, j, v) => { App.state.matrixAData[i][j] = v; },
    onCellClick: (i, j) => {
      if (App.state.isAnimating) return;
      if (i === j) selectDiagCell(i, j);
    },
    onCellTouch: (i, j) => {
      if (App.state.isAnimating) return;
      if (i === j) selectDiagCell(i, j);
    }
  });
}

function selectDiagCell(i, j) {
  const key = i + '-' + j;
  if (App.state.selectedDiagCells.has(key)) {
    App.state.selectedDiagCells.delete(key);
  } else {
    App.state.selectedDiagCells.add(key);
  }
  updateTraceSelections();

  if (App.state.selectedDiagCells.size === App.state.currentDim) {
    runTraceAnimation();
  }
}

function updateTraceSelections() {
  App.el.matrixATrace.querySelectorAll('input').forEach(input => {
    input.classList.remove(App.CSS.SELECTED_DIAG);
  });

  App.state.selectedDiagCells.forEach(key => {
    const parts = key.split('-');
    const r = parseInt(parts[0]);
    const c = parseInt(parts[1]);
    const input = App.el.matrixATrace.querySelector(
      'input[data-row="' + r + '"][data-col="' + c + '"]'
    );
    if (input) input.classList.add(App.CSS.SELECTED_DIAG);
  });
}

function runTraceAnimation() {
  if (App.state.selectedDiagCells.size !== App.state.currentDim || App.state.isAnimating) return;
  App.state.isAnimating = true;

  const diagInputs = [];
  for (let k = 0; k < App.state.currentDim; k++) {
    const input = App.el.matrixATrace.querySelector(
      'input[data-row="' + k + '"][data-col="' + k + '"]'
    );
    if (input) diagInputs.push(input);
  }

  if (!diagInputs.length) return;

  const positions = diagInputs.map(el => App.getElementCenter(el));
  const resultBox = document.querySelector('.trace-result-box');
  const resultPos = App.getElementCenter(resultBox);

  App.el.animCtxTrace.clearRect(0, 0, App.el.animCanvasTrace.width, App.el.animCanvasTrace.height);

  let phase = 1;
  let currentIdx = 0;
  let lineProgress = 0;
  const lineSpeed = 0.06;

  function animate() {
    App.el.animCtxTrace.clearRect(0, 0, App.el.animCanvasTrace.width, App.el.animCanvasTrace.height);

    if (phase === 1) {
      lineProgress += lineSpeed;
      if (lineProgress >= 1) {
        lineProgress = 0;
        currentIdx++;
        if (currentIdx >= positions.length) {
          phase = 2;
        }
      }

      for (let i = 0; i < currentIdx && i < positions.length; i++) {
        App.el.animCtxTrace.beginPath();
        App.el.animCtxTrace.arc(positions[i].x, positions[i].y, 12, 0, Math.PI * 2);
        App.el.animCtxTrace.fillStyle = 'rgba(0, 255, 136, 0.3)';
        App.el.animCtxTrace.fill();
      }

      if (currentIdx < positions.length) {
        const startPos = currentIdx > 0 ? positions[currentIdx - 1] : positions[0];
        const endPos = positions[currentIdx];
        const cx = startPos.x + (endPos.x - startPos.x) * lineProgress;
        const cy = startPos.y + (endPos.y - startPos.y) * lineProgress;

        App.drawGlowLine(App.el.animCtxTrace, startPos.x, startPos.y, cx, cy, '#00ff88', 3);
      }
    }

    if (phase === 2) {
      for (let i = 0; i < positions.length; i++) {
        App.el.animCtxTrace.beginPath();
        App.el.animCtxTrace.arc(positions[i].x, positions[i].y, 12, 0, Math.PI * 2);
        App.el.animCtxTrace.fillStyle = 'rgba(0, 255, 136, 0.3)';
        App.el.animCtxTrace.fill();
      }

      const lastPos = positions[positions.length - 1];
      App.drawGlowLine(App.el.animCtxTrace, lastPos.x, lastPos.y, resultPos.x, resultPos.y, '#00ff88', 3);
      App.drawGlowDot(App.el.animCtxTrace, resultPos.x, resultPos.y, 10, '#ffffff');

      phase = 3;
      setTimeout(() => {
        Particles.burst(resultPos.x, resultPos.y, 50, 'rgb(0, 255, 136)');
        showCalcBalloonTrace(resultPos.x, resultPos.y);
      }, 300);
    }

    if (phase === 3 || phase === 4) {
      for (let i = 0; i < positions.length; i++) {
        App.el.animCtxTrace.beginPath();
        App.el.animCtxTrace.arc(positions[i].x, positions[i].y, 12, 0, Math.PI * 2);
        App.el.animCtxTrace.fillStyle = 'rgba(0, 255, 136, 0.2)';
        App.el.animCtxTrace.fill();
      }

      const lastPos = positions[positions.length - 1];
      App.drawLine(App.el.animCtxTrace, lastPos.x, lastPos.y, resultPos.x, resultPos.y, 'rgba(0, 255, 136, 0.4)', 2);
    }

    if (phase < 4) {
      requestAnimationFrame(animate);
    } else {
      App.fadeOutLines(App.el.animCtxTrace, App.el.animCanvasTrace, (alpha) => {
        for (let i = 0; i < positions.length; i++) {
          App.el.animCtxTrace.beginPath();
          App.el.animCtxTrace.arc(positions[i].x, positions[i].y, 12, 0, Math.PI * 2);
          App.el.animCtxTrace.fillStyle = 'rgba(0, 255, 136, 0.3)';
          App.el.animCtxTrace.fill();
        }

        const lastPos = positions[positions.length - 1];
        App.drawLine(App.el.animCtxTrace, lastPos.x, lastPos.y, resultPos.x, resultPos.y, '#00ff88', 2);
      }, () => {
        App.state.selectedDiagCells.clear();
        updateTraceSelections();
        App.state.isAnimating = false;
      });
    }

    if (phase === 3) {
      setTimeout(() => { phase = 4; }, 1000);
    }
  }

  animate();
}

function showCalcBalloonTrace(x, y) {
  const { value, steps } = MatrixOps.traceSteps(App.state.matrixAData);
  const stepText = steps[0] || '';

  App.el.balloonTrace.innerHTML =
    '<div>' + stepText + '</div>' +
    '<div class="' + App.CSS.BALLOON_RESULT + '">= ' + value + '</div>';

  App.positionBalloon(App.el.balloonTrace, x, y);

  setTimeout(() => {
    App.hideBalloon(App.el.balloonTrace);
    const cleanTrace = MatrixOps.roundSmart(value);
    App.el.traceResultValue.textContent = Number.isInteger(cleanTrace) ? cleanTrace : cleanTrace.toFixed(2);
    App.el.traceResultValue.classList.add(App.CSS.CALCULATED);
  }, 2500);
}

function selectCell(name, i, j) {
  if (name === 'A') {
    if (App.state.selectedCellA && App.state.selectedCellA.row === i && App.state.selectedCellA.col === j) {
      App.state.selectedCellA = null;
    } else {
      App.state.selectedCellA = { row: i, col: j };
      if (App.state.selectedCellB && (App.state.selectedCellB.row !== i || App.state.selectedCellB.col !== j)) {
        App.state.selectedCellB = null;
      }
    }
  } else {
    if (App.state.selectedCellA && App.state.selectedCellA.row === i && App.state.selectedCellA.col === j) {
      App.state.selectedCellB = (App.state.selectedCellB && App.state.selectedCellB.row === i && App.state.selectedCellB.col === j)
        ? null : { row: i, col: j };
    } else if (!App.state.selectedCellA) {
      App.state.selectedCellB = { row: i, col: j };
    }
  }
  updateCellSelections();

  if (App.state.selectedCellA && App.state.selectedCellB) {
    runAddSubAnimation();
  }
}

function updateCellSelections() {
  const containers = [App.el.matrixAAdd, App.el.matrixBAdd, App.el.matrixASub, App.el.matrixBSub];
  containers.forEach(c => {
    if (!c) return;
    c.querySelectorAll('input').forEach(input => {
      input.classList.remove(App.CSS.SELECTED_ROW, App.CSS.SELECTED_COL);
    });
  });

  if (App.state.selectedCellA) {
    const matA = App.state.currentOperation === 'add' ? App.el.matrixAAdd : App.el.matrixASub;
    const input = matA.querySelector(
      'input[data-row="' + App.state.selectedCellA.row + '"][data-col="' + App.state.selectedCellA.col + '"]'
    );
    if (input) input.classList.add(App.CSS.SELECTED_ROW);
  }

  if (App.state.selectedCellB) {
    const matB = App.state.currentOperation === 'add' ? App.el.matrixBAdd : App.el.matrixBSub;
    const input = matB.querySelector(
      'input[data-row="' + App.state.selectedCellB.row + '"][data-col="' + App.state.selectedCellB.col + '"]'
    );
    if (input) input.classList.add(App.CSS.SELECTED_COL);
  }
}

function runAddSubAnimation() {
  if (!App.state.selectedCellA || !App.state.selectedCellB || App.state.isAnimating) return;
  App.state.isAnimating = true;

  const matA = App.state.currentOperation === 'add' ? App.el.matrixAAdd : App.el.matrixASub;
  const matB = App.state.currentOperation === 'add' ? App.el.matrixBAdd : App.el.matrixBSub;
  const resGrid = App.state.currentOperation === 'add' ? App.el.resultAdd : App.el.resultSub;
  const ctx = App.state.currentOperation === 'add' ? App.el.animCtxAdd : App.el.animCtxSub;
  const canvas = App.state.currentOperation === 'add' ? App.el.animCanvasAdd : App.el.animCanvasSub;

  const cellA = matA.querySelector(
    'input[data-row="' + App.state.selectedCellA.row + '"][data-col="' + App.state.selectedCellA.col + '"]'
  );
  const cellB = matB.querySelector(
    'input[data-row="' + App.state.selectedCellB.row + '"][data-col="' + App.state.selectedCellB.col + '"]'
  );
  const targetCell = resGrid.querySelector(
    '.result-cell[data-row="' + App.state.selectedCellA.row + '"][data-col="' + App.state.selectedCellA.col + '"]'
  );

  if (!cellA || !cellB || !targetCell) return;

  const posA = App.getElementCenter(cellA);
  const posB = App.getElementCenter(cellB);
  const targetPos = App.getElementCenter(targetCell);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let phase = 1;
  let progA = 0;
  let progB = 0;
  const speed = 0.04;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (phase === 1) {
      progA += speed;
      if (progA >= 1) { progA = 1; phase = 2; }

      const cx = posA.x + (targetPos.x - posA.x) * progA;
      const cy = posA.y + (targetPos.y - posA.y) * progA;

      App.drawGlowLine(ctx, posA.x, posA.y, cx, cy, '#00d4ff', 3);
    }

    if (phase === 2) {
      App.drawGlowLine(ctx, posA.x, posA.y, targetPos.x, targetPos.y, '#00d4ff', 3);

      progB += speed;
      if (progB >= 1) { progB = 1; phase = 3; }

      const cx = posB.x + (targetPos.x - posB.x) * progB;
      const cy = posB.y + (targetPos.y - posB.y) * progB;

      App.drawGlowLine(ctx, posB.x, posB.y, cx, cy, '#ff6464', 3);
    }

    if (phase === 3) {
      App.drawGlowLine(ctx, posA.x, posA.y, targetPos.x, targetPos.y, '#00d4ff', 3);
      App.drawGlowLine(ctx, posB.x, posB.y, targetPos.x, targetPos.y, '#ff6464', 3);
      App.drawGlowDot(ctx, targetPos.x, targetPos.y, 10, '#ffffff');

      phase = 4;
      setTimeout(() => {
        Particles.burst(targetPos.x, targetPos.y, 50, 'rgb(0, 255, 136)');
        showCalcBalloonAddSub(targetPos.x, targetPos.y);
      }, 300);
    }

    if (phase === 4 || phase === 5) {
      App.drawLine(ctx, posA.x, posA.y, targetPos.x, targetPos.y, 'rgba(0, 212, 255, 0.4)', 2);
      App.drawLine(ctx, posB.x, posB.y, targetPos.x, targetPos.y, 'rgba(255, 100, 100, 0.4)', 2);
    }

    if (phase < 5) {
      requestAnimationFrame(animate);
    } else {
      App.fadeOutLines(ctx, canvas, (alpha) => {
        App.drawLine(ctx, posA.x, posA.y, targetPos.x, targetPos.y, '#00d4ff', 2);
        App.drawLine(ctx, posB.x, posB.y, targetPos.x, targetPos.y, '#ff6464', 2);
      }, () => {
        App.state.selectedCellA = null;
        App.state.selectedCellB = null;
        updateCellSelections();
        App.state.isAnimating = false;
      });
    }

    if (phase === 4) {
      setTimeout(() => { phase = 5; }, 1000);
    }
  }

  animate();
}

function showCalcBalloonAddSub(x, y) {
  const row = App.state.selectedCellA.row;
  const col = App.state.selectedCellA.col;
  let result, text;

  if (App.state.currentOperation === 'add') {
    const step = MatrixOps.addStep(App.state.matrixAData, App.state.matrixBData, row, col);
    result = step.result;
    text = step.text;
  } else {
    const step = MatrixOps.subtractStep(App.state.matrixAData, App.state.matrixBData, row, col);
    result = step.result;
    text = step.text;
  }

  const balloonEl = App.state.currentOperation === 'add' ? App.el.balloonAdd : App.el.balloonSub;
  const cleanResult = MatrixOps.roundSmart(result);
  balloonEl.innerHTML =
    '<div>' + text + '</div>' +
    '<div class="' + App.CSS.BALLOON_RESULT + '">= ' + cleanResult + '</div>';

  App.positionBalloon(balloonEl, x, y);

  setTimeout(() => {
    App.hideBalloon(balloonEl);
    showResultAddSub(result, row, col);
  }, 2500);
}

function showResultAddSub(value, row, col) {
  const resGrid = App.state.currentOperation === 'add' ? App.el.resultAdd : App.el.resultSub;
  App.showResultInCell(resGrid, value, row, col);
}
