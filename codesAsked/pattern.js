function patternPrinting(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = i; j <= rows; j++) {
      if (i == 1) {
        row += "*";
      } else if (j == i) {
        row += "*";
      } else if (j == rows) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
let numRows = 6;
patternPrinting(numRows);
