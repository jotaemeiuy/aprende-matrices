/**
 * views-inv.js — Vista de Inversa (Gauss-Jordan)
 * Renderiza matriz aumentada, pasos con navegación anterior/siguiente
 */

function initInvView() {
  const dim = App.state.currentDim === 3 ? 3 : 2;
  App.state.currentDim = dim;
  document.querySelectorAll('#view-inv .dim-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.dim) === dim);
  });
  App.inverse.matrixAInvData = dim === 3
    ? [[2, 1, 0], [1, 3, 1], [0, 1, 2]]
    : [[2, 1], [1, 3]];
  App.inverse.gjSteps = [];
  App.inverse.gjCurrentStep = 0;
  App.el.invSteps.innerHTML = '';
  App.el.animCtxInv.clearRect(0, 0, App.el.animCanvasInv.width, App.el.animCanvasInv.height);
  App.renderMatrix(App.el.matrixAInv, App.inverse.matrixAInvData, 'Inv', {
    dim: dim,
    cssClass: 'matrix matrix-' + dim,
    onInput: (i, j, v) => { App.inverse.matrixAInvData[i][j] = v; }
  });
  App.el.invCalcBtn.classList.remove(App.CSS.HIDDEN);
  App.el.invCalcBtn.textContent = 'Calcular pasos';
}

function buildGJStepEl(step, index, totalSteps, silent) {
  const isLast = (step.type === 'done' || step.type === 'error');

  const stepEl = document.createElement('div');
  const classes = ['inv-step'];
  if (silent) classes.push(App.CSS.VISIBLE);
  if (isLast) classes.push(step.type === 'error' ? 'error-step' : 'done-step');
  stepEl.className = classes.join(' ');

  const labelEl = document.createElement('div');
  let labelClass = 'inv-step-label';
  if (step.type === 'init') labelClass += ' init-label';
  else if (step.type === 'done') labelClass += ' done-label';
  else if (step.type === 'error') labelClass += ' error-label';
  else labelClass += ' operation-label';
  labelEl.className = labelClass;
  labelEl.textContent = step.label;
  stepEl.appendChild(labelEl);

  const augEl = document.createElement('div');
  const n = step.augMatrix.length;
  augEl.className = 'inv-step-aug aug-' + n;
  if (isLast && step.type === 'done') augEl.classList.add(App.CSS.DONE_GLOW);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n; j++) {
      const cell = document.createElement('div');
      cell.className = 'inv-aug-cell';
      cell.textContent = MatrixOps.roundSmart(step.augMatrix[i][j]);
      if (step.highlightRow === i) cell.classList.add(App.CSS.HIGHLIGHT);
      if (j >= n) cell.classList.add(App.CSS.IDENTITY);
      if (isLast && step.type === 'done' && j >= n) cell.classList.add('result-cell-inv');
      augEl.appendChild(cell);
    }
  }
  stepEl.appendChild(augEl);

  const counterEl = document.createElement('div');
  counterEl.className = 'inv-counter';
  counterEl.textContent = `Paso ${index + 1} de ${totalSteps}`;
  stepEl.appendChild(counterEl);

  return stepEl;
}

function invCalcHandler() {
  const dim = App.state.currentDim === 3 ? 3 : 2;
  const inputs = App.el.matrixAInv.querySelectorAll('input');
  const data = [];
  for (let i = 0; i < dim; i++) data[i] = new Array(dim).fill(0);
  inputs.forEach(input => {
    const i = parseInt(input.dataset.row);
    const j = parseInt(input.dataset.col);
    if (i < dim && j < dim) data[i][j] = parseFloat(input.value) || 0;
  });

  App.inverse.matrixAInvData = data;
  App.inverse.gjSteps = MatrixOps.gaussJordanSteps(App.inverse.matrixAInvData);
  App.inverse.gjCurrentStep = 0;
  App.el.invSteps.innerHTML = '';

  App.el.invCalcBtn.classList.add(App.CSS.HIDDEN);
  renderAllSteps();
}

App.initInvListeners = function() {
  App.el.invCalcBtn.addEventListener('click', invCalcHandler);
};

function renderAllSteps() {
  App.el.invSteps.innerHTML = '';
  App.inverse.gjCurrentStep = 0;
  showGJStep(0);
}

function showGJStep(index) {
  if (index < 0 || index >= App.inverse.gjSteps.length) return;
  App.inverse.gjCurrentStep = index;
  const step = App.inverse.gjSteps[index];
  const isLast = (step.type === 'done' || step.type === 'error');

  const stepEl = buildGJStepEl(step, index, App.inverse.gjSteps.length, false);
  const augEl = stepEl.querySelector('.inv-step-aug');

  App.el.invSteps.appendChild(stepEl);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      stepEl.classList.add(App.CSS.VISIBLE);
      stepEl.querySelectorAll('.inv-aug-cell').forEach((c, ci) => {
        setTimeout(() => c.classList.add(App.CSS.POP), ci * 40);
      });
      stepEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  if (isLast) {
    const color = step.type === 'error' ? 'rgb(255, 68, 68)' : 'rgb(0, 255, 136)';
    const cx = window.innerWidth / 2;
    const cy = augEl.getBoundingClientRect().top + augEl.offsetHeight / 2;
    Particles.burst(cx, cy, 80, color);

    if (step.type === 'done') {
      const btnRow = document.createElement('div');
      btnRow.className = 'inv-btn-row';
      const btn = document.createElement('button');
      btn.className = 'inv-next-btn';
      btn.textContent = 'Verificar en multiplicación →';
      btn.addEventListener('click', () => {
        const n = step.result.length;
        App.state.currentOperation = 'mul';
        App.state.currentDim = n;
        document.querySelectorAll('#view-mul .dim-btn').forEach(b => {
          b.classList.toggle('active', parseInt(b.dataset.dim) === n);
        });
        App.state.matrixAData = App.inverse.matrixAInvData.map(r => [...r]);
        App.state.matrixBData = step.result.map(r => [...r]);
        App.showView('view-mul');
        App.renderMatrix(App.el.matrixA, App.state.matrixAData, 'A', {
          onCellClick: (i, j) => {
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
          onCellClick: (i, j) => {
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
      });
      btnRow.appendChild(btn);
      App.el.invSteps.appendChild(btnRow);
    }

    setTimeout(() => {
      App.el.invCalcBtn.classList.remove(App.CSS.HIDDEN);
      App.el.invCalcBtn.textContent = 'Recalcular';
    }, 800);
  }

  if (!isLast) {
    const btnRow = document.createElement('div');
    btnRow.className = 'inv-btn-row';

    if (index > 0) {
      const backBtn = document.createElement('button');
      backBtn.className = 'inv-back-step-btn';
      backBtn.textContent = '← Anterior';
      backBtn.addEventListener('click', () => {
        App.el.invSteps.innerHTML = '';
        renderAllStepsUpTo(index - 1);
      });
      btnRow.appendChild(backBtn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'inv-next-btn';
    nextBtn.textContent = 'Siguiente paso →';
    nextBtn.addEventListener('click', () => {
      App.el.invSteps.innerHTML = '';
      renderAllStepsUpTo(index + 1);
    });
    btnRow.appendChild(nextBtn);

    App.el.invSteps.appendChild(btnRow);
  }
}

function renderAllStepsUpTo(targetIndex) {
  App.el.invSteps.innerHTML = '';
  App.inverse.gjCurrentStep = targetIndex;

  for (let i = 0; i < targetIndex; i++) {
    renderStepSilent(i);
  }
  showGJStep(targetIndex);
}

function renderStepSilent(index) {
  const step = App.inverse.gjSteps[index];
  const stepEl = buildGJStepEl(step, index, App.inverse.gjSteps.length, true);
  App.el.invSteps.appendChild(stepEl);
}
