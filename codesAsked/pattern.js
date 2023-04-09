function patternPrinting(rows) {
  //outer loop works as rows
  //inner loop works as columns
  for (i = 0; i < 6; i++) {
    for (let j = 0; j < rows - i; j++) {
      if (i == 0 || i == 5) {
        process.stdout.write("*");
      } else {
        if (j == 0 || j == rows - i - 1) {
          process.stdout.write("*");
        } else {
          process.stdout.write(" ");
        }
      }
    }
    console.log("");
  }
}
let numRows = 6;
patternPrinting(numRows);
