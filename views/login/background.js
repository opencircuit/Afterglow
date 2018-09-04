'use strict'

let canvas;
let canvasContext;
let stars;
let framesPerSecond;
let starsLimit;
let mouseLocation;

function initializeCanvas() {

    canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext('2d');
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
}

function initializeSettings() {

    stars = [];
    framesPerSecond = 60;
    starsLimit = 45;
    mouseLocation = { x: 0, y: 0 };
}

function populateStarsArray() {

    for (let starIndex = 0; starIndex < starsLimit; starIndex++) {
        addStarToArray();
    }
}

function addStarToArray() {

    let xCoordinate = Math.random() * canvas.width;
    let yCoordinate = Math.random() * canvas.height;
    let starRadius = Math.random() * 1 + 1;
    let xAxisVelocity = Math.floor(Math.random() * 50) - 25;
    let yAxisVelocity = Math.floor(Math.random() * 50) - 25;

    stars.push({
        x: xCoordinate,
        y: yCoordinate,
        radius: starRadius,
        vx: xAxisVelocity,
        vy: yAxisVelocity
    });
}

function addMouseMovementEventHandler() {

    canvas.addEventListener('mousemove', function(e) {

        mouseLocation.x = e.clientX;
        mouseLocation.y = e.clientY;
    });
}

function connectingDotsAnimation() {
    
    drawStarsToCanvas();
    updateCanvasWithStarsMovement();
    requestAnimationFrame(connectingDotsAnimation);
}

function drawStarsToCanvas() {

  canvasContext.clearRect(0,0,canvas.width,canvas.height);
  canvasContext.globalCompositeOperation = "lighter";
  drawStars();
  canvasContext.beginPath();
  moveStarsAroundOnCanvas();
  canvasContext.lineWidth = 0.05;
  canvasContext.strokeStyle = 'white';
  canvasContext.stroke();
}

function drawStars() {

    for (let starIndex = 0; starIndex < starsLimit; starIndex++) {
        drawStar(starIndex);
    }
}

function drawStar(starIndex) {

    let star = stars[starIndex];
    canvasContext.fillStyle = '#FFFFFF';
    canvasContext.beginPath();
    canvasContext.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    canvasContext.fill();
    canvasContext.fillStyle = 'black';
    canvasContext.stroke();
}

function moveStarsAroundOnCanvas() {

    for (let starIndex = 0; starIndex < starsLimit; starIndex++) {
        moveStars(starIndex);     
    }
}

function moveStars(starIndex) {

    let primaryStar = stars[starIndex];
    moveSingleStar(primaryStar);
    moveRemainingStarsAroundStarOne(primaryStar);
}

function moveSingleStar(primaryStar) {

    canvasContext.moveTo(primaryStar.x, primaryStar.y);
    if (calculateDistance(mouseLocation, primaryStar) >= 150) { return; }
    canvasContext.lineTo(mouseLocation.x, mouseLocation.y);
}

function moveRemainingStarsAroundStarOne(primaryStar) {

    for (let starIndex = 0; starIndex < starsLimit; starIndex++) {
        moveRemainingStar(primaryStar, starIndex);
    }
}

function moveRemainingStar(primaryStar, starIndex) {

    let remainingStar = stars[starIndex];
    if (calculateDistance(primaryStar, remainingStar) >= 150) { return; }
    canvasContext.lineTo(remainingStar.x, remainingStar.y);
}

function calculateDistance( point1, point2 ){

    let xDistance = 0;
    xDistance = point2.x - point1.x;
    xDistance = xDistance * xDistance;

    let yDistance = 0;
    yDistance = point2.y - point1.y;
    yDistance = yDistance * yDistance;

    return Math.sqrt( xDistance + yDistance );
}

function updateCanvasWithStarsMovement() {

    for (let starIndex = 0; starIndex < starsLimit; starIndex++) {
        updateCanvasWithStarMovement(starIndex);
    }
}

function updateCanvasWithStarMovement(starIndex) {

    let star = stars[starIndex];
    star.x += star.vx / framesPerSecond;
    star.y += star.vy / framesPerSecond;
    if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
    if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
}