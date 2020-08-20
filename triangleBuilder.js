function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  };
  return line + "\n";
};

function makeTriangle(height) {
  for (i = 1; i <= height; i++) {
    console.log(makeLine(i));
  };
};




makeTriangle(9);