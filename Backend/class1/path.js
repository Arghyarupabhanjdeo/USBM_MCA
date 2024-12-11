const path = require("path");
console.log(path);
const rootDir = path.dirname(__dirname);
console.log(rootDir); //backend

//adding paths
console.log(path.join("class1", "path.js"));//class1\path.js
console.log(path.basename());
console.log(path.extname());

