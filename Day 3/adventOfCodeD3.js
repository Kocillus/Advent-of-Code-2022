const fs = require("fs");

let input = fs.readFileSync("input.txt", { encoding: "utf8", flag: "r" });

let lines = input.split("\n");

//Part 1//

let scores = [];

for (const backpack of lines) {
  let firstCompartments = backpack.substring(0, backpack.length / 2);
  let secondCompartments = backpack.substring(backpack.length / 2);

  let characterToLookFor = getComparedBackpacks(
    firstCompartments,
    secondCompartments
  );
  let score = getCalculatedScore(characterToLookFor[0]);
  scores.push(score);
}

console.log(`total score: ${scores.reduce((acc, a) => acc + a)}`);

//Part 2//
scores = [];

for (let i = 0; i < lines.length; i += 3) {
    let firstBackpack = lines[i];
    let secondBackpack = lines[i+1];
    let thirdBackpack = lines [i+2];
    let temporaryBackpack = getComparedBackpacks(firstBackpack, secondBackpack);
    let finalBackpack = getComparedBackpacks(temporaryBackpack, thirdBackpack);
    console.log(`temp = ${temporaryBackpack}, final = ${finalBackpack}`)
    let score = getCalculatedScore(finalBackpack[0]);
    scores.push(score);
}

console.log(`total score: ${scores.reduce((acc, a) => acc + a)}`);

function getComparedBackpacks(first, second) {
  let biggestBackpack = "";
  let smallestBackpack = "";
  let characters = [];

  if (first.length > second.length) {
    biggestBackpack = first;
    smallestBackpack = second;
  } else {
    biggestBackpack = second;
    smallestBackpack = first;
  }

  for (let i = 0; i < biggestBackpack.length; i++) {
    let character = biggestBackpack[i];
    if (smallestBackpack.includes(character)) {
      characters.push(character);
    }
  }
  return characters;
}

function getCalculatedScore(character) {
  let asciiNumber = character.charCodeAt(0);

  let score = 0;

  if (asciiNumber >= 97) {
    score = asciiNumber - 96;
  } else {
    score = asciiNumber - 65 + 27;
  }
  return score;
}
