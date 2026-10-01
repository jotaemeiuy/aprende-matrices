/**
 * views-det.js — Vista de Determinante
 * Método Sarrus (diagonales)
 */

// Inicializa la vista de determinante (2×2 o 3×3 con grilla 5×3)
function initDetView() {
  App.det.matrixADetData = App.state.currentDim === 3
    ? [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    : [[2, 1], [1, 3]];
  App.el.detResultArea.innerHTML = '';
  App.el.animCtxDet.clearRect(0, 0, App.el.animCanvasDet.width, App.el.animCanvasDet.height);
  App.det.detGrid5x3 = null;
  App.det.detCopyCells = [];

  if (App.state.currentDim === 3) {
    renderDetGrid5x3();
  } else {
    App.renderMatrix(App.el.matrixADet, App.det.matrixADetData, 'Det', {
      onInput: (i, j, v) => { App.det.matrixADetData[i][j] = v; }
    });
  }
  App.el.detCalcBtn.classList.remove(App.CSS.HIDDEN);
  App.el.detCalcBtn.textContent = 'Calcular';
}

// Renderiza grilla 5×3: 3 filas editables + 2 filas copia (Sarrus)
function renderDetGrid5x3() {
  App.el.matrixADet.innerHTML = '';
  App.el.matrixADet.className = 'det-grid-5x3';
  App.det.detGrid5x3 = App.el.matrixADet;
  App.det.detCopyCells = [];

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 3; c++) {
      const cell = document.createElement('div');
      cell.className = 'det-cell-5x3';
      if (r >= 3) cell.classList.add('copy');
      const srcRow = r < 3 ? r : r - 3;
      const val = App.det.matrixADetData[srcRow] ? App.det.matrixADetData[srcRow][c] : 0;

      if (r < 3) {
        const input = document.createElement('input');
        input.type = 'tel';
        input.value = val;
        input.dataset.row = srcRow;
        input.dataset.col = c;
        input.addEventListener('input', (e) => {
          const v = App.validateInput(e.target.value);
          if (v !== null) {
            App.det.matrixADetData[srcRow][c] = v;
            updateDet5x3Copies();
          }
        });
        cell.appendChild(input);
      } else {
        cell.textContent = MatrixOps.roundSmart(val);
        App.det.detCopyCells.push({ el: cell, row: srcRow, col: c });
      }
      App.det.detGrid5x3.appendChild(cell);
    }
  }
}

// Actualiza filas copia cuando se modifican filas 0 o 1
function updateDet5x3Copies() {
  App.det.detCopyCells.forEach(ci => {
    ci.el.textContent = MatrixOps.roundSmart(App.det.matrixADetData[ci.row][ci.col]);
  });
}

// Registra event listener del botón calcular
function initDetListeners() {
  App.el.detCalcBtn.addEventListener('click', () => {
    const data = [];
    for (let i = 0; i < App.state.currentDim; i++) {
      data[i] = [];
      for (let j = 0; j < App.state.currentDim; j++) {
        const input = document.querySelector(`#matrixA-det input[data-row="${i}"][data-col="${j}"]`);
        data[i][j] = parseFloat(input?.value) || 0;
      }
    }
    App.det.matrixADetData = data;
    App.el.detResultArea.innerHTML = '';
    App.el.animCtxDet.clearRect(0, 0, App.el.animCanvasDet.width, App.el.animCanvasDet.height);
    App.el.detCalcBtn.classList.add(App.CSS.HIDDEN);

    runDetSarrus();
  });
}

// ===== DIAGONALES SARRUS =====
// Ejecuta animación de diagonales Sarrus (2×2 o 3×3)
function runDetSarrus() {
  const n = App.state.currentDim;
  App.el.viewDet.style.overflowY = 'hidden';

  App.el.animCtxDet.clearRect(0, 0, App.el.animCanvasDet.width, App.el.animCanvasDet.height);
  App.el.detResultArea.innerHTML = '';

  if (n === 2) {
    const a = App.det.matrixADetData[0][0], b = App.det.matrixADetData[0][1];
    const c = App.det.matrixADetData[1][0], d = App.det.matrixADetData[1][1];
    const prodAD = a * d;
    const prodBC = b * c;

    const cell00 = App.el.matrixADet.querySelector('input[data-row="0"][data-col="0"]');
    const cell01 = App.el.matrixADet.querySelector('input[data-row="0"][data-col="1"]');
    const cell10 = App.el.matrixADet.querySelector('input[data-row="1"][data-col="0"]');
    const cell11 = App.el.matrixADet.querySelector('input[data-row="1"][data-col="1"]');

    const pos00 = App.getElementCenter(cell00);
    const pos01 = App.getElementCenter(cell01);
    const pos10 = App.getElementCenter(cell10);
    const pos11 = App.getElementCenter(cell11);

    const cx = Math.max(pos00.x, pos01.x) + 60;
    const cy1 = pos00.y;

    const calcRow = document.createElement('div');
    calcRow.className = 'det-formula';
    App.el.detResultArea.appendChild(calcRow);

    setTimeout(() => {
      drawDetLine(pos00.x, pos00.y, pos11.x, pos11.y, '#00ff88');
    }, 200);

    setTimeout(() => {
      App.el.balloonDet.innerHTML = `
        <div>a·d = ${a}·${d}</div>
        <div class="${App.CSS.BALLOON_RESULT}" style="color:#00ff88">= ${MatrixOps.roundSmart(prodAD)}</div>
      `;
      App.positionBalloon(App.el.balloonDet, cx, cy1);
    }, 300);

    setTimeout(() => {
      App.hideBalloon(App.el.balloonDet);
    }, 1800);

    setTimeout(() => {
      calcRow.textContent = `a·d = ${MatrixOps.roundSmart(prodAD)}`;
      calcRow.classList.add(App.CSS.VISIBLE);
    }, 2100);

    setTimeout(() => {
      drawDetLine(pos01.x, pos01.y, pos10.x, pos10.y, '#ff5050');
    }, 2600);

    setTimeout(() => {
      App.el.balloonDet.innerHTML = `
        <div>b·c = ${b}·${c}</div>
        <div class="${App.CSS.BALLOON_RESULT}" style="color:#ff5050">= ${MatrixOps.roundSmart(prodBC)}</div>
      `;
      App.positionBalloon(App.el.balloonDet, cx, cy1 + 50);
    }, 2700);

    setTimeout(() => {
      App.hideBalloon(App.el.balloonDet);
    }, 4200);

    setTimeout(() => {
      calcRow.textContent = `a·d = ${MatrixOps.roundSmart(prodAD)}  |  b·c = ${MatrixOps.roundSmart(prodBC)}`;
    }, 4500);

    setTimeout(() => {
      showDetFinal(prodAD - prodBC);
    }, 5000);

  } else {
    const m = App.det.matrixADetData;

    const greenCalcDiv = document.createElement('div');
    greenCalcDiv.className = 'det-calc-row';
    App.el.detResultArea.appendChild(greenCalcDiv);

    const redCalcDiv = document.createElement('div');
    redCalcDiv.className = 'det-calc-row';
    App.el.detResultArea.appendChild(redCalcDiv);

    const prods = [
      { val: m[0][0]*m[1][1]*m[2][2], type: 'green', label: 'a₁₁·a₂₂·a₃₃',
        from: [0,0], mid: [1,1], to: [2,2] },
      { val: m[1][0]*m[2][1]*m[0][2], type: 'green', label: 'a₂₁·a₃₂·a₁₃',
        from: [1,0], mid: [2,1], to: [3,2] },
      { val: m[2][0]*m[0][1]*m[1][2], type: 'green', label: 'a₃₁·a₁₂·a₂₃',
        from: [2,0], mid: [3,1], to: [4,2] },
      { val: m[2][0]*m[1][1]*m[0][2], type: 'red', label: 'a₃₁·a₂₂·a₁₃',
        from: [2,0], mid: [1,1], to: [0,2] },
      { val: m[0][0]*m[2][1]*m[1][2], type: 'red', label: 'a₁₁·a₃₂·a₂₃',
        from: [3,0], mid: [2,1], to: [1,2] },
      { val: m[1][0]*m[0][1]*m[2][2], type: 'red', label: 'a₂₁·a₁₂·a₃₃',
        from: [4,0], mid: [3,1], to: [2,2] }
    ];

    function getCell5x3(row, col) {
      return App.det.detGrid5x3.children[row * 3 + col];
    }

    let delay = 300;
    prods.forEach((p, i) => {
      setTimeout(() => {
        const color = p.type === 'green' ? '#00ff88' : '#ff5050';
        const fromEl = getCell5x3(p.from[0], p.from[1]);
        const midEl = getCell5x3(p.mid[0], p.mid[1]);
        const toEl = getCell5x3(p.to[0], p.to[1]);
        const from = App.getElementCenter(fromEl);
        const mid = App.getElementCenter(midEl);
        const to = App.getElementCenter(toEl);
        drawDetLine(from.x, from.y, mid.x, mid.y, color);
        setTimeout(() => drawDetLine(mid.x, mid.y, to.x, to.y, color), 200);

        const displayVal = p.type === 'red' ? -p.val : p.val;
        const displaySign = displayVal >= 0 ? '+' : '−';
        App.el.balloonDet.innerHTML = `
          <div>${p.label}</div>
          <div class="${App.CSS.BALLOON_RESULT}" style="color:${color}">= ${displaySign} ${MatrixOps.roundSmart(Math.abs(displayVal))}</div>
        `;
        const lastEl = getCell5x3(2, 2);
        const lastPos = App.getElementCenter(lastEl);
        App.positionBalloon(App.el.balloonDet, lastPos.x + 80, from.y);
      }, delay);

      setTimeout(() => {
        App.hideBalloon(App.el.balloonDet);
        const target = p.type === 'green' ? greenCalcDiv : redCalcDiv;
        const span = document.createElement('span');
        span.className = 'det-calc-item';
        span.style.color = p.type === 'green' ? '#00ff88' : '#ff5050';
        const displayVal = p.type === 'red' ? -p.val : p.val;
        const displaySign = displayVal >= 0 ? '+' : '−';
        span.textContent = `${displaySign}${MatrixOps.roundSmart(Math.abs(displayVal))}`;
        target.appendChild(span);
      }, delay + 1000);

      delay += 1500;
    });

    setTimeout(() => {
      const greenSum = prods.filter(p => p.type === 'green').reduce((s, p) => s + p.val, 0);
      const redSum = prods.filter(p => p.type === 'red').reduce((s, p) => s + p.val, 0);
      showDetFinal(greenSum - redSum);
    }, delay + 500);
  }
}

// Dibuja una línea animada entre dos puntos en el canvas
function drawDetLine(x1, y1, x2, y2, color) {
  let progress = 0;
  const duration = 40;

  function animate() {
    progress++;
    const t = Math.min(progress / duration, 1);
    const cx = x1 + (x2 - x1) * t;
    const cy = y1 + (y2 - y1) * t;

    App.el.animCtxDet.beginPath();
    App.el.animCtxDet.moveTo(x1, y1);
    App.el.animCtxDet.lineTo(cx, cy);
    App.el.animCtxDet.strokeStyle = color;
    App.el.animCtxDet.lineWidth = 2;
    App.el.animCtxDet.stroke();

    if (t < 1) requestAnimationFrame(animate);
  }
  animate();
}

// Muestra resultado final del determinante con burst de partículas
function showDetFinal(value) {
  App.el.animCtxDet.clearRect(0, 0, App.el.animCanvasDet.width, App.el.animCanvasDet.height);

  const el = document.createElement('div');
  el.className = 'det-result-final';
  el.textContent = `det(A) = ${MatrixOps.roundSmart(value)}`;
  App.el.detResultArea.appendChild(el);

  requestAnimationFrame(() => {
    el.classList.add(App.CSS.VISIBLE);
    const cx = window.innerWidth / 2;
    const cy = el.getBoundingClientRect().top + el.offsetHeight / 2;
    Particles.burst(cx, cy, 80, Math.abs(value) < 1e-6 ? 'rgb(255, 68, 68)' : 'rgb(0, 255, 136)');
  });

  setTimeout(() => {
    App.el.detCalcBtn.classList.remove(App.CSS.HIDDEN);
    App.el.detCalcBtn.textContent = 'Recalcular';
    App.el.viewDet.style.overflowY = 'auto';
  }, 800);
}
