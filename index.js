var square = document.getElementById("square");
var target = document.getElementById("target");

var isDragging = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

square.addEventListener("mousedown", dragStart);
square.addEventListener("mouseup", dragEnd);
square.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === square) {
    isDragging = true;
  }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
  
    isDragging = false;
    
    square.classList.remove("dragging"); // Remove "dragging" class from square element when dragging ends
  
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
  
  square.classList.remove("dragging"); // Remove "dragging" class from square element when dragging ends

  // Check if the square is over the target element
  if (
    currentX >= target.offsetLeft &&
    currentX <= target.offsetLeft + target.offsetWidth &&
    currentY >= target.offsetTop &&
    currentY <= target.offsetTop + target.offsetHeight
  ) {
    alert("Square is over target!");
  }
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();

    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, square);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}