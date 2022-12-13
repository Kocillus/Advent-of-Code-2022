import { input } from "./adventOfCodeD2_input.js";

let lines = input.split("\n");

const ROCK_SCORE = 1;
const PAPER_SCORE = 2;
const SCISSORS_SCORE = 3;
const LOSE_SCORE = 0;
const DRAW_SCORE = 3;
const WIN_SCORE = 6;

let score = 0;

//Part 1//

for (const line of lines)
    {
        let instructions = line.split(" ");
        let left = instructions[0];
        let right = instructions[1];
        if (left == "A" && right == "Y")
            {
                score += WIN_SCORE + PAPER_SCORE;
            }
        if (left == "A" && right == "X")
            {
                score += DRAW_SCORE + ROCK_SCORE;
            }
        if (left == "A" && right == "Z")
            {
                score += LOSE_SCORE + SCISSORS_SCORE;
            }
        if (left == "B" && right == "Y")
            {
                score += DRAW_SCORE + PAPER_SCORE;
            }
        if (left == "B" && right == "X")
            {
                score += LOSE_SCORE + ROCK_SCORE;
            }
        if (left == "B" && right == "Z")
            {
                score += WIN_SCORE + SCISSORS_SCORE;
            }
        if (left == "C" && right == "Y")
            {
                score += LOSE_SCORE + PAPER_SCORE;
            }
        if (left == "C" && right == "X")
            {
                score += WIN_SCORE + ROCK_SCORE;
            }
        if (left == "C" && right == "Z")
            {
                score += DRAW_SCORE + SCISSORS_SCORE;
            }
    }

console.log(score);

//Part 2//
score = 0;

for (const line of lines)
    {
        let instructions = line.split(" ");
        let left = instructions[0];
        let right = instructions[1];
        if (left == "A" && right == "Y")
            {
                score += DRAW_SCORE + ROCK_SCORE;
            }
        if (left == "A" && right == "X")
            {
                score += LOSE_SCORE + SCISSORS_SCORE;
            }
        if (left == "A" && right == "Z")
            {
                score += WIN_SCORE + PAPER_SCORE;
            }
        if (left == "B" && right == "Y")
            {
                score += DRAW_SCORE + PAPER_SCORE;
            }
        if (left == "B" && right == "X")
            {
                score += LOSE_SCORE + ROCK_SCORE;
            }
        if (left == "B" && right == "Z")
            {
                score += WIN_SCORE + SCISSORS_SCORE;
            }
        if (left == "C" && right == "Y")
            {
                score += DRAW_SCORE + SCISSORS_SCORE;
            }
        if (left == "C" && right == "X")
            {
                score += LOSE_SCORE + PAPER_SCORE;
            }
        if (left == "C" && right == "Z")
            {
                score += WIN_SCORE + ROCK_SCORE;
            }
    }

console.log(score);