export default function debounce(func, wait = 250) {
  let timerId = null;

  function cancel() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  function debounced(...args) {
    cancel();
    const that = this;

    timerId = setTimeout(() => {
      func.apply(that, args);
    }, wait);
  }

  debounced.cancel = cancel;
  return debounced;
}
