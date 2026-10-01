/**
 * shared.js — Estado global, elementos DOM y funciones utilitarias compartidas
 * Todas las vistas acceden al estado vía App.state, elementos vía App.el
 */

// ===== NAMESPACES =====
const App = {};

// ===== CONSTANTES CSS =====
App.CSS = {
  SELECTED_ROW: 'selected-row',
  SELECTED_COL: 'selected-col',
  SELECTED_DIAG: 'selected-diag',
  ACTIVE_CELL: 'active-cell',
  HIDDEN: 'hidden',
  VISIBLE: 'visible',
  RESULT_CELL: 'result-cell',
  CELL_VALUE: 'cell-value',
  BALLOON_RESULT: 'balloon-result',
  POP: 'pop',
  HIGHLIGHT: 'highlight',
  IDENTITY: 'identity',
  DONE_GLOW: 'done-glow',
  DIM: 'dim',
  CALCULATED: 'calculated',
};

// ===== ESTADO =====
App.state = {
  currentDim: 2,
  currentOperation: 'mul',
  matrixAData: [],
  matrixBData: [],
  resultData: null,
  selectedRow: -1,
  selectedCol: -1,
  selectedCellA: null,
  selectedCellB: null,
  isAnimating: false,
  lastTapTime: 0,
  lastTouchTime: 0,
  selectedDiagCells: new Set()
};

// ===== ELEMENTOS DOM =====
App.el = {
  menu: document.getElementById('menu'),
  viewMul: document.getElementById('view-mul'),
  viewAdd: document.getElementById('view-add'),
  viewSub: document.getElementById('view-sub'),
  viewTrace: document.getElementById('view-trace'),
  viewGeneric: document.getElementById('view-generic'),
  // Multiplicación
  matrixA: document.getElementById('matrixA'),
  matrixB: document.getElementById('matrixB'),
  resultGrid: document.getElementById('result-grid'),
  animCanvas: document.getElementById('anim-canvas'),
  animCtx: null,
  balloon: document.getElementById('calc-balloon'),
  // Suma
  matrixAAdd: document.getElementById('matrixA-add'),
  matrixBAdd: document.getElementById('matrixB-add'),
  resultAdd: document.getElementById('result-add'),
  animCanvasAdd: document.getElementById('anim-canvas-add'),
  animCtxAdd: null,
  balloonAdd: document.getElementById('calc-balloon-add'),
  // Resta
  matrixASub: document.getElementById('matrixA-sub'),
  matrixBSub: document.getElementById('matrixB-sub'),
  resultSub: document.getElementById('result-sub'),
  animCanvasSub: document.getElementById('anim-canvas-sub'),
  animCtxSub: null,
  balloonSub: document.getElementById('calc-balloon-sub'),
  // Traza
  matrixATrace: document.getElementById('matrixA-trace'),
  animCanvasTrace: document.getElementById('anim-canvas-trace'),
  animCtxTrace: null,
  balloonTrace: document.getElementById('calc-balloon-trace'),
  traceResultValue: document.getElementById('trace-result-value'),
  // Inversa
  viewInv: document.getElementById('view-inv'),
  matrixAInv: document.getElementById('matrixA-inv'),
  invSteps: document.getElementById('inv-steps'),
  invCalcBtn: document.getElementById('inv-calc-btn'),
  animCanvasInv: document.getElementById('anim-canvas-inv'),
  animCtxInv: null,
  // Determinante
  viewDet: document.getElementById('view-det'),
  matrixADet: document.getElementById('matrixA-det'),
  detCalcBtn: document.getElementById('det-calc-btn'),
  detResultArea: document.getElementById('det-result-area'),
  animCanvasDet: document.getElementById('anim-canvas-det'),
  animCtxDet: null,
  balloonDet: document.getElementById('balloon-det'),
};

App.el.animCtx = App.el.animCanvas.getContext('2d');
App.el.animCtxAdd = App.el.animCanvasAdd.getContext('2d');
App.el.animCtxSub = App.el.animCanvasSub.getContext('2d');
App.el.animCtxTrace = App.el.animCanvasTrace.getContext('2d');
App.el.animCtxInv = App.el.animCanvasInv.getContext('2d');
App.el.animCtxDet = App.el.animCanvasDet.getContext('2d');

App.inverse = {
  matrixAInvData: [],
  gjSteps: [],
  gjCurrentStep: 0
};

App.det = {
  matrixADetData: [],
  detGrid5x3: null,
  detCopyCells: []
};

// ===== NAVEGACIÓN =====
// Cambia la vista activa (menú, multiplicación, etc.)
App.showView = function(viewId) {
  App.el.menu.classList.add(App.CSS.HIDDEN);
  App.el.viewMul.classList.add(App.CSS.HIDDEN);
  App.el.viewAdd.classList.add(App.CSS.HIDDEN);
  App.el.viewSub.classList.add(App.CSS.HIDDEN);
  App.el.viewTrace.classList.add(App.CSS.HIDDEN);
  App.el.viewInv.classList.add(App.CSS.HIDDEN);
  App.el.viewDet.classList.add(App.CSS.HIDDEN);
  App.el.viewGeneric.classList.add(App.CSS.HIDDEN);

  if (viewId === 'menu') {
    App.el.menu.classList.remove(App.CSS.HIDDEN);
  } else if (viewId === 'view-mul') {
    App.el.viewMul.classList.remove(App.CSS.HIDDEN);
    App.resizeCanvas(App.el.animCanvas);
  } else if (viewId === 'view-add') {
    App.el.viewAdd.classList.remove(App.CSS.HIDDEN);
    App.resizeCanvas(App.el.animCanvasAdd);
  } else if (viewId === 'view-sub') {
    App.el.viewSub.classList.remove(App.CSS.HIDDEN);
    App.resizeCanvas(App.el.animCanvasSub);
  } else if (viewId === 'view-trace') {
    App.el.viewTrace.classList.remove(App.CSS.HIDDEN);
    App.resizeCanvas(App.el.animCanvasTrace);
  } else if (viewId === 'view-inv') {
    App.el.viewInv.classList.remove(App.CSS.HIDDEN);
    App.resizeCanvas(App.el.animCanvasInv);
  } else if (viewId === 'view-det') {
    App.el.viewDet.classList.remove(App.CSS.HIDDEN);
    App.resizeCanvas(App.el.animCanvasDet);
  } else {
    document.getElementById('generic-title').textContent =
      document.querySelector(`[data-view="${viewId.replace('view-', '')}"] .card-title`).textContent;
    App.el.viewGeneric.classList.remove(App.CSS.HIDDEN);
  }

  document.body.style.overflow = viewId === 'menu' ? '' : 'hidden';
};

// ===== CANVAS =====
// Ajusta canvas de animación al tamaño de ventana
App.resizeCanvas = function(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

// ===== UTILIDADES MATEMÁTICAS =====
// Valida input numérico: retorna el valor parseado o null si es inválido
App.validateInput = function(raw) {
  if (raw === '' || raw === '-' || raw === '-0' || raw === '0-') return null;
  const val = parseFloat(raw);
  return isNaN(val) ? null : val;
};

// Devuelve el centro (x,y) de un elemento del DOM
App.getElementCenter = function(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
};

// Obtiene todos los inputs de una fila
App.getRowElements = function(row, container) {
  return Array.from(container.querySelectorAll(`input[data-row="${row}"]`));
};

// Obtiene todos los inputs de una columna
App.getColElements = function(col, container) {
  return Array.from(container.querySelectorAll(`input[data-col="${col}"]`));
};

// ===== RENDER MATRICES =====
// Renderiza una matriz NxN de inputs editables con callbacks opcionales
// Opts: { onInput, onCellClick, onCellTouch, dataStore, dim, cssClass }
App.renderMatrix = function(container, data, name, opts = {}) {
  const dim = opts.dim || App.state.currentDim;
  const cssClass = opts.cssClass || `matrix matrix-${dim}`;
  container.innerHTML = '';
  container.className = cssClass;
  container.addEventListener('contextmenu', (e) => e.preventDefault());

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      const input = document.createElement('input');
      input.type = 'tel';
      input.value = data[i][j];
      input.dataset.row = i;
      input.dataset.col = j;

      // Handler de input con validación unificada
      input.addEventListener('input', (e) => {
        const val = App.validateInput(e.target.value);
        if (val === null) return;
        if (opts.onInput) {
          opts.onInput(i, j, val);
        } else if (name === 'A') {
          App.state.matrixAData[i][j] = val;
        } else if (name === 'B') {
          App.state.matrixBData[i][j] = val;
        }
      });

      // Touch/click handlers solo si se proporcionan callbacks
      if (opts.onCellClick) {
        let touchHandled = false;

        input.addEventListener('touchstart', (e) => {
          const now = Date.now();
          if (now - App.state.lastTouchTime < 300) {
            e.preventDefault();
            App.state.lastTouchTime = 0;
            touchHandled = true;
            e.target.blur();
            if (App.state.isAnimating) return;
            if (opts.onCellTouch) opts.onCellTouch(i, j);
            return;
          }
          App.state.lastTouchTime = now;
          touchHandled = false;
        }, { passive: false });

        input.addEventListener('click', (e) => {
          if (touchHandled) { touchHandled = false; return; }
          opts.onCellClick(i, j, e);
        });
      }

      container.appendChild(input);
    }
  }
};

// Renderiza grilla de resultado NxN
App.renderResultGrid = function(container) {
  const dim = App.state.currentDim;
  container.innerHTML = '';
  container.className = `matrix matrix-${dim}`;

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      const cell = document.createElement('div');
      cell.className = App.CSS.RESULT_CELL;
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.innerHTML = `<span class="${App.CSS.CELL_VALUE}">0</span>`;
      container.appendChild(cell);
    }
  }
};

// ===== GLOBO DE CÁLCULO =====
// Posiciona y muestra un globo de cálculo en (x,y)
App.positionBalloon = function(el, x, y) {
  const bw = el.offsetWidth || 200;
  const bh = el.offsetHeight || 60;
  const bx = Math.max(bw / 2 + 10, Math.min(x, window.innerWidth - bw / 2 - 10));
  const by = Math.max(bh + 10, Math.min(y - 70, window.innerHeight - 10));
  el.style.left = bx + 'px';
  el.style.top = by + 'px';
  el.classList.remove(App.CSS.HIDDEN);
  requestAnimationFrame(() => el.classList.add(App.CSS.VISIBLE));
};

// Oculta un globo de cálculo con animación fade
App.hideBalloon = function(el) {
  el = el || App.el.balloon;
  el.classList.remove(App.CSS.VISIBLE);
  setTimeout(() => el.classList.add(App.CSS.HIDDEN), 300);
};

// ===== RESULTADO EN CELDA =====
// Muestra un valor en una celda de resultado con burst de partículas
App.showResultInCell = function(container, value, row, col) {
  const cell = container.querySelector(
    `.${App.CSS.RESULT_CELL}[data-row="${row}"][data-col="${col}"]`
  );
  if (!cell) return;

  const valSpan = cell.querySelector(`.${App.CSS.CELL_VALUE}`);
  const clean = MatrixOps.roundSmart(value);
  valSpan.textContent = Number.isInteger(clean) ? clean : clean.toFixed(2);
  cell.classList.add(App.CSS.ACTIVE_CELL);

  Particles.burst(
    cell.getBoundingClientRect().left + cell.offsetWidth / 2,
    cell.getBoundingClientRect().top + cell.offsetHeight / 2,
    25,
    'rgb(0, 255, 136)'
  );
};

// ===== DRAWING CANVAS =====
// Dibuja una línea entre dos puntos en un canvas
App.drawLine = function(ctx, x1, y1, x2, y2, color, width) {
  width = width || 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
};

// Dibuja una línea con glow entre dos puntos
App.drawGlowLine = function(ctx, x1, y1, x2, y2, color, width) {
  width = width || 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.shadowColor = color;
  ctx.shadowBlur = 15;
  ctx.stroke();
  ctx.shadowBlur = 0;
};

// Dibuja un punto con glow en el canvas
App.drawGlowDot = function(ctx, x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 25;
  ctx.fill();
  ctx.shadowBlur = 0;
};

// ===== ANIMACIÓN =====
// Anima el fade-out de líneas en canvas, luego ejecuta onComplete
// drawFn(alpha) se llama en cada frame para redibujar las líneas
App.fadeOutLines = function(ctx, canvas, drawFn, onComplete) {
  let fadeAlpha = 1;
  const fadeInterval = setInterval(() => {
    fadeAlpha -= 0.04;
    if (fadeAlpha <= 0) {
      clearInterval(fadeInterval);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (onComplete) onComplete();
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = fadeAlpha;
    drawFn(fadeAlpha);
    ctx.globalAlpha = 1;
  }, 30);
};
