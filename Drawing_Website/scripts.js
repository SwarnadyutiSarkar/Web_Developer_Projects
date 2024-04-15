const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let painting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchstart', startPosition);
canvas.addEventListener('touchend', endPosition);
canvas.addEventListener('touchmove', draw);

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    let x, y;
    if (e.type === 'touchmove' || e.type === 'touchstart') {
        x = e.touches[0].clientX - canvas.offsetLeft;
        y = e.touches[0].clientY - canvas.offsetTop;
    } else {
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
