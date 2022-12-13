import { input } from "./adventOfCodeD1_input.js";

const elves = input.split("\n\n")

let max = 0;

//Part 1//

for (const elf of elves)
    {
      let calories = elf.split("\n").map(Number);
      let sum = calories.reduce((partialSum, a) => partialSum + a, 0);  
      if (sum > max)
        {
            max = sum;
        }
      console.log (max);
    };

//Part 2//
let podium = [];

for (const elf of elves)
    {
      let calories = elf.split("\n").map(Number);
      let sum = calories.reduce((partialSum, a) => partialSum + a, 0);  
      podium.push(sum);
    };

podium.sort((a, b) => b - a);

let top = podium.slice(0, 3);

let sumTop = top.reduce((partialSum, a) => partialSum + a, 0);

console.log(sumTop);
