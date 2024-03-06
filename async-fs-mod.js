const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    const second = result;
    writeFile(
      "./content/async-result.txt",
      `This is the result: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(`Error: ${err}`);
          return;
        }
        console.log(result);
      }
    );
  });
});
