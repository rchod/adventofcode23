#!/usr/bin/env zx

function sumOfPartNumbers(engineSchematic) {
  const rows = engineSchematic.split("\n");
  const symbols = ["*", "#", "+", "$"]; // Symbols to check adjacency

  let sum = 0;

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      const currentCell = rows[i][j];
      if (
        !isNaN(parseInt(currentCell)) &&
        currentCell !== "." &&
        isAdjacentToSymbol(i, j, rows, symbols)
      ) {
        sum += parseInt(currentCell);
      }
    }
  }

  return sum;
}

function isAdjacentToSymbol(row, col, schematic, symbols) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    /*[0, 0],*/ [0, 1], // [0, 0] represents the current cell, not needed for adjacency check
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;

    if (
      newRow >= 0 &&
      newRow < schematic.length &&
      newCol >= 0 &&
      newCol < schematic[newRow].length &&
      symbols.includes(schematic[newRow][newCol])
    ) {
      return true;
    }
  }

  return false;
}

const input = await fs.readFileSync("day3-p1.txt", {
  encoding: "utf8",
});

console.log(sumOfPartNumbers(input));
