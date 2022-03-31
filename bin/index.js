const wordList = require("../assets/wordlist");
const chalk = require("chalk");
const boxen = require("boxen");
const checkWord = require("./checkWord");

const randomWordIndex = Math.floor(Math.random() * wordList.length);
const standard_input = process.stdin; // Get process.stdin as the standard input object.
const randomWord = wordList[randomWordIndex];

const validateInput = (word) => {
  if (word.length !== 5 || !wordList.includes(word)) {
    return false;
  }
  return true;
};

// Set input character encoding.
standard_input.setEncoding("utf-8");

// Prompt user to input data in console.
console.log(
  boxen("Start a game by typing your first word", { borderStyle: "round" })
);
let attempts = 0;

// When user input data and click enter key.
standard_input.on("data", function (data) {
  // User input exit.
  const input = validateInput(data.slice(0, 5).toLowerCase());
  if (data === "exit\n") {
    // Program exit.
    process.exit();
  } else {
    if (input) {
      attempts++;
      const res = checkWord(data.toLowerCase(), randomWord.toLowerCase());
      const resArr = res[1];
      console.log(
        resArr[0],
        resArr[1],
        resArr[2],
        resArr[3],
        resArr[4],
        `(${attempts}/6)`
      );
      if (res[0] === 5) {
        console.log("Yay! You got it right🎉");
        process.exit();
      }
      if (attempts === 6) {
        console.log(chalk.blue(randomWord), "You suck at this bro");
      }
    } else {
      console.log(chalk.red("Invalid Input"));
    }
  }
});
