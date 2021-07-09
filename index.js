const { circleFunc } = require("./circle");

circleFunc(-1, (err, out) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("area : ", out.area(), "perimeter ", out.perimeter());
  }
});
