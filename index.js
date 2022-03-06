const rect = require("./rectangle");

function solveRect(x, y) {
  console.log(`Solving for rect with l = ${x} and b= ${y}`);
  if (x <= 0 || y <= 0) {
    return;
  } else {
    console.log(`Area : ${rect.area(x, y)}`);
    console.log(`Perimeter: ${rect.perimeter(x, y)}`);
  }
}
solveRect(4, 5);
solveRect(0, 5);
solveRect(5, 0);
