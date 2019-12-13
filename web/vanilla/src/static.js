console.log('vanilla javascript app used to proxy messages between MF');

if (window) {
  window.addEventListener('message', e => console.log(e));
}
