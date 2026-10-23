/* Lightweight pixel wizard animation for the Life RPG.
   Static SVG frames keep this compatible with GitHub Pages and iOS Safari. */
(function () {
  const root = document.getElementById('avatar');
  if (!root) return;
  const base = './assets/characters/wizard/';
  const frames = {
    idle: [base + 'idle-1.svg', base + 'idle-2.svg'],
    study: [base + 'study-1.svg', base + 'study-2.svg']
  };
  let mode = 'idle';
  let frame = 0;
  let timer = null;
  const img = document.createElement('img');
  img.className = 'wizard-sprite';
  img.alt = 'Pixel-art elder wizard';
  img.width = 64;
  img.height = 96;
  img.src = frames.idle[0];
  img.onerror = function () {
    root.textContent = '🧙';
    root.setAttribute('aria-label', 'Wizard');
    stop();
  };
  root.replaceChildren(img);
  root.setAttribute('role', 'img');
  root.setAttribute('aria-label', 'Wizard character');

  function paint() {
    const set = frames[mode] || frames.idle;
    img.src = set[frame % set.length];
    frame++;
  }
  function stop() {
    if (timer !== null) window.clearInterval(timer);
    timer = null;
  }
  function run() {
    stop();
    paint();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = window.setInterval(paint, mode === 'study' ? 650 : 1100);
    }
  }
  window.setWizardMode = function (nextMode) {
    mode = frames[nextMode] ? nextMode : 'idle';
    frame = 0;
    run();
  };
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop();
    else run();
  });
  run();
})();