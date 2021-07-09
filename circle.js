const asyncFunc = (radius, callback) => {
  if (radius < 0) {
    callback(new Error("circle radius should not be less than 0"), null);
  } else {
    callback(null, {
      area: () => {
        return 3.142857 * radius * radius;
      },
      perimeter: () => {
        return 2 * 3.142857 * radius;
      },
    });
  }
};
module.exports.circleFunc = asyncFunc;
