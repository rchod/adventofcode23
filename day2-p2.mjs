#!/usr/bin/env zx

function sumPowerGames(gamesData) {
  const games = gamesData.split("\n");
  let sum = 0;

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

    sum +=
      Math.max(...cubeCount.blue) *
      Math.max(...cubeCount.red) *
      Math.max(...cubeCount.green);
  }

  return sum;
}

const gamesData = await fs.readFileSync("day2-p2.txt", {
  encoding: "utf8",
});

const sum = sumPowerGames(gamesData);

console.log("Sum of powers", sum);
