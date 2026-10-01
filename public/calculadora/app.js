/**
 * app.js — Orquestación: event listeners, navegación y inicialización
 * Las funciones de vista y utilidades están en shared.js, views-*.js
 */
(function() {
  // Click en cards del menú → abre la vista correspondiente
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const view = card.dataset.view;
      App.state.currentOperation = view;
      App.showView(`view-${view}`);

      if (view === 'mul') initMulView();
      else if (view === 'add' || view === 'sub') initAddSubView(view);
      else if (view === 'trace') initTraceView();
      else if (view === 'inv') initInvView();
      else if (view === 'det') initDetView();
    });
  });

  // Botón "← Volver" en cada vista
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => App.showView('menu'));
  });

  // Botones de dimensión (2×2, 3×3, etc.)
  document.querySelectorAll('.dim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dim-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      App.state.currentDim = parseInt(btn.dataset.dim);

      if (App.state.currentOperation === 'mul') initMulView();
      else if (App.state.currentOperation === 'trace') initTraceView();
      else if (App.state.currentOperation === 'det') initDetView();
      else if (App.state.currentOperation === 'inv') initInvView();
      else initAddSubView(App.state.currentOperation);
    });
  });

  // Listener de resize para todos los canvas
  window.addEventListener('resize', () => {
    App.resizeCanvas(App.el.animCanvas);
    App.resizeCanvas(App.el.animCanvasAdd);
    App.resizeCanvas(App.el.animCanvasSub);
    App.resizeCanvas(App.el.animCanvasTrace);
    App.resizeCanvas(App.el.animCanvasInv);
    App.resizeCanvas(App.el.animCanvasDet);
  });

  // Event listeners de vistas específicas
  App.initInvListeners();
  initDetListeners();

  // Vista inicial: menú
  App.showView('menu');
})();
