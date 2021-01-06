let textHere = document.getElementById('textHere');// display data

var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

let isDrawing = false;
let a = 10;
let b = 10;
var input = 'r=' + String(a) + '\\cos(\\theta*' + String(b) + ')*' + String(a) + '\\sin\(\\theta*' + String(b) + ')'
calculator.setExpression({ id: 'graph1', latex: input });
canvas2.addEventListener('mousedown', () => isDrawing = true);
canvas2.addEventListener('mouseup', () => isDrawing = false);

function drawPosenet(XY) {
  //XY = object   { x: value, y: value }
  textHere.innerHTML= "Coordinates: " + Math.floor(XY.x) + ", " + Math.floor(XY.y) + ", A/B: " + a + ", " + b;


  // stop the function if not mouse down
  if(!isDrawing) return;

  //console.log(XY);
  a = XY.x / screen.width * 5;
  b = XY.y / screen.height * 5;
  input = 'r=' + String(a) + '\\cos(\\theta*' + String(b) + ')*' + String(a) + '\\sin\(\\theta*' + String(b) + ')'
  calculator.setExpression({ id: 'graph1', latex: input });
}
