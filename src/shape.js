var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(0, 0, 255, 1.0)'
c.fillRect(100, 100, 70, 70);