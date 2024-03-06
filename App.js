const lodash = require("lodash");

const array = [1, [2, [3, [4, [5]]]]];

const newArray = lodash.flattenDeep(array);
console.log(newArray);
