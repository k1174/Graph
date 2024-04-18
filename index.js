const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

drawGrid()

//getting point size
const strokeSize = document.getElementById("pi_input")
let value = document.getElementById("value")
value.textContent = strokeSize.value
ctx.lineWidth = strokeSize.value;
strokeSize.addEventListener("input", (event) => {
    value.textContent = event.target.value
    ctx.lineWidth = strokeSize.value;
})


let isLine = true

document.addEventListener("click", (event)=>{
    const clickedElement = event.target
    if(clickedElement.id == "line"){
        isLine = true
        console.log("Drawing mode changed to : line")
    }
    else if(clickedElement.id == "pencil"){
        isLine = false
        console.log("Drawing mode changed to : pencil")
    }
})

function reset(){
    ctx.reset();
    drawGrid()
}

function drawPoint(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.setLineDash([]);
    // arc(x, y, radius, startAngle, endAngle)
    ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
    ctx.fill();
}


function drawGrid() {
    for (let i = 0; i <= 20; i++) {
        drawPoint(25 * i, 250);
        drawPoint(250, 25 * i)
    }

    //x-axis
    ctx.beginPath();
    ctx.setLineDash([1, 1]);
    //move our pencil point
    ctx.moveTo(250, 0);
    //draw line to 
    ctx.lineTo(250, 500);
    ctx.stroke();

    //y-axis
    ctx.moveTo(0, 250)
    ctx.lineTo(500, 250)
    ctx.stroke();
}


let isDrawing = false
let lastX = 0
let lastY = 0

canvas.addEventListener("mousedown", (event) => {
    isDrawing = true
    lastX = event.offsetX;
    lastY = event.offsetY;
    drawPoint(lastX, lastY)
    // console.log("Mouse down at:", lastX, lastY);
})

canvas.addEventListener("mouseup", (event) => {
    if (isDrawing && isLine) {
        const x = event.offsetX
        const y = event.offsetY
        drawLine(lastX, lastY, x, y)
    }
    isDrawing = false
    // console.log("Mouse up at:", x, y);
})


canvas.addEventListener("mousemove",(event) => {
    if(isDrawing && !isLine){

        const x = event.offsetX
        const y = event.offsetY
        drawLine(lastX,lastY, x, y)
       lastX = x
       lastY = y
    }
    // console.log(event);
})

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}