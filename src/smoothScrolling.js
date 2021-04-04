const body = document.body;
const main = document.getElementById('main');

let sx = 0, sy = 0;
let dx = sx, dy = sy;

function updateBodyHeight() {
  body.style.height = main.clientHeight + 'px';
}

setInterval(updateBodyHeight, 1); 
// recalculates the body height when the size of the page changes

main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;
window.addEventListener('scroll', easeScroll);

function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {
  dx = linearly_interpolate(dx, sx, 0.1);
  dy = linearly_interpolate(dy, sy, 0.1);
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
  window.requestAnimationFrame(render);
}

function linearly_interpolate(a, b, n) {
  return (1 - n) * a + n * b;
}