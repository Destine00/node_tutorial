const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result.txt",
  `This is the result: ${firstFile} and ${secondFile}`,
  { flag: "a" }
);
