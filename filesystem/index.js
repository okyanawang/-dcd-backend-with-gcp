const fs = require("fs");
const path = require("path");

const fileReadCallback = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
};

fs.readFile(path.resolve(__dirname, "notes.txt"), "UTF-8", fileReadCallback);
