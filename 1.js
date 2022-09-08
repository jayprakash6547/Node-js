const fs = require("fs");
let text = fs.readFileSync("delete.txt","utf-8");
text = text.replace("3rd year" ,"5th Sem");
console.log("The content of the file is ")
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("jay.txt",text)