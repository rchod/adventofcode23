#!/usr/bin/env zx

var lineReader = require("readline").createInterface({
  input: require("fs").createReadStream("day1.txt"),
});

let sum = 0;

let map = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

lineReader.on("line", function (line) {
  let match = line.match(/[0-9]|one|two|three|four|five|six|seven|eight|nine/g);
  console.log(match);
  let ll = +(
    (map[match.at(0)] || match.at(0)) + (map[match.at(-1)] || match.at(-1))
  );
  sum += ll;
  console.log("Line from file:", line, ll);
});

lineReader.on("close", function () {
  console.log("all done, son", sum);
});
