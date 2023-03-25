const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
  path.resolve(__dirname, "input.txt"),
  {
    highWaterMark: 15,
  }
);

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, "output.txt")
);

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (err) {
    console.log(err);
  }
});

readableStream.on("end", () => {
  writableStream.end();
  //   console.log("Done");
});
