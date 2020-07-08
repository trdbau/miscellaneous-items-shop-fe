import $stores from '@/stores';

let timer = null;

function start() {
  if (timer) return;

  // only show loading when response time is >= 500ms
  timer = setTimeout(() => {
    timer = null;
    $stores.commit('loading/start');
  }, 500);
}

function stop() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    return;
  }

  $stores.commit('loading/stop');
}

export default { start, stop };
