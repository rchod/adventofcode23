#!/usr/bin/env zx

function checkPossibleGames(cubeCounts, gamesData) {
  const games = gamesData.split("\n");
  const possibleGames = [];

  for (let i = 0; i < games.length; i++) {
    const game = games[i].split(": ")[1].split("; ");
    const cubeCount = { red: [], green: [], blue: [] };

    for (let j = 0; j < game.length; j++) {
      const cubes = game[j].split(", ");
      cubes.forEach((cube) => {
        const [count, color] = cube.split(" ");
        cubeCount[color].push(+count);
      });
    }

    if (
      cubeCount.blue.every((v) => v <= cubeCounts.blue) &&
      cubeCount.red.every((v) => v <= cubeCounts.red) &&
      cubeCount.green.every((v) => v <= cubeCounts.green)
    ) {
      possibleGames.push(i + 1);
    }
  }

  return possibleGames;
}

const gamesData = await fs.readFileSync("day2.txt", {
  encoding: "utf8",
});

// Given cube counts
const cubeCounts = { red: 12, green: 13, blue: 14 };

// Check possible games
const possibleGames = checkPossibleGames(cubeCounts, gamesData);
const sumOfIDs = possibleGames.reduce((acc, val) => acc + val, 0);

console.log("Possible games:", possibleGames);
console.log("Sum of IDs", sumOfIDs);
