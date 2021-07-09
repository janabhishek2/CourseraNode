function asyncFunc(x, y, callback) {
  if (x <= 0 || y <= 0) {
    setTimeout(() => {
      callback(new Error("dimensions >0 "), null);
    }, 3000);
  } else {
    setTimeout(() => {
      callback(null, {
        area: () => {
          return x * y;
        },
        perimeter: () => {
          return 2 * (x + y);
        },
      });
    }, 1000);
  }
}

module.exports = asyncFunc;
