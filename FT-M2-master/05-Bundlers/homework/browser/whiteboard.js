import whiteboard from './event-emitter.js';

let color;
let colorElements = [].slice.call(document.querySelectorAll('.marker'));
colorElements.forEach(function (el) {
  el.style.backgroundColor = el.id;

  el.addEventListener('click', function () {
    color = this.id;
    document.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');
  });
});

let canvas = document.getElementById('paint');
let ctx = canvas.getContext('2d');

function resize() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  let pixelRatio = window.devicePixelRatio || 1;
  let w = canvas.clientWidth * pixelRatio,
    h = canvas.clientHeight * pixelRatio;
  if (w !== canvas.width || h !== canvas.height) {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = w;
    canvas.height = h;
    ctx.putImageData(imgData, 0, 0);
  }

  ctx.scale(pixelRatio, pixelRatio);
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
}

resize();
window.addEventListener('resize', resize);

let currentMousePosition = {x: 0, y: 0};
let lastMousePosition = {x: 0, y: 0};
let drawing = false;

canvas.addEventListener('mousedown', function (e) {
  drawing = true;
  currentMousePosition.x = e.pageX - this.offsetLeft;
  currentMousePosition.y = e.pageY - this.offsetTop;
});

canvas.addEventListener('mouseup', function () {
  drawing = false;
});

canvas.addEventListener('mousemove', function (e) {
  if (!drawing) return;
  lastMousePosition.x = currentMousePosition.x;
  lastMousePosition.y = currentMousePosition.y;
  currentMousePosition.x = e.pageX - this.offsetLeft;
  currentMousePosition.y = e.pageY - this.offsetTop;
  whiteboard.draw(lastMousePosition, currentMousePosition, color, true);
});

whiteboard.draw = function (start, end, strokeColor, shouldBroadcast) {
  ctx.beginPath();
  ctx.strokeStyle = strokeColor || 'black';
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.closePath();
  ctx.stroke();
  if (shouldBroadcast) {
    whiteboard.emit('draw', start, end, strokeColor);
  }
};

export default whiteboard;
