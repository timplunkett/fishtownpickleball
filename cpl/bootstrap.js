'use strict';

(() => {
  const DATASETS = Object.freeze({
    week1: 'data.test-week1.js',
    week6: 'data.test-week6.js',
  });
  const LOCAL_HOSTS = new Set(['', 'localhost', '127.0.0.1', '::1']);
  const isLocal = LOCAL_HOSTS.has(window.location.hostname);
  const requested = new URLSearchParams(window.location.search).get('dataset');
  const selected = (isLocal && requested && DATASETS[requested]) ? DATASETS[requested] : 'data.js';

  const loadScript = (src, onload, onerror) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = onload || null;
    script.onerror = onerror || null;
    document.body.appendChild(script);
  };

  const loadApp = () => loadScript('app.js');

  loadScript(selected, loadApp, () => {
    if (selected !== 'data.js') {
      loadScript('data.js', loadApp);
    }
  });
})();
