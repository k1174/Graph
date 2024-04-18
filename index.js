const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

points()
function points(x, y){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.setLineDash([]);
    // arc(x, y, radius, startAngle, endAngle)
    ctx.arc(x , y, 1.5, 0, 2 * Math.PI);
    ctx.fill();
    
}

drawPoints()
function drawPoints(){
    for(let i=0; i<=20; i++){
        points(25*i, 250);
        points(250, 25*i)
    }
}

axis()
function axis(){
    ctx.beginPath();
    ctx.setLineDash([4, 2]);
    //move our pencil point
    ctx.moveTo(250, 0);
    //draw line to 
    ctx.lineTo(250,500);
    ctx.stroke();
    
    ctx.moveTo(0, 250)
    ctx.lineTo(500,250)
    ctx.stroke();
}

addEventListeners()
function addEventListeners() {
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mousemove", onMouseMove)
}


let xClick = 0
let yClick = 0
// Define event handler functions
function onMouseDown(event) {
    // Your mouse down logic here
    xClick = event.offsetX;
    yClick = event.offsetY;
    // console.log("Mouse down at:", xClick, yClick);
}

function onMouseUp(event) {
    const x = event.offsetX
    const y = event.offsetY
    if(xClick == x && yClick == yClick){
        points(x,y)
        return
    }
    drawLine(xClick,yClick, x, y)
    // console.log("Mouse up at:", x, y);
}

function onMouseMove(event) {
    // Your mouse move logic here
    // console.log(event);
}

function drawLine(xClick, yClick, x, y){
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(xClick,yClick)
    ctx.lineTo(x,y)
    ctx.stroke()
}
