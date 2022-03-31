const wordList = require("../assets/wordlist");
const chalk = require("chalk");

/* 
    Input Constrains
    1. Should be 5 letter word
    2. Should be some from the wordList

*/

const checkWord = function (word, randomWord) {
  let resArr = [];
  let count = 0;

  [...word].map((letter) =>
    resArr.push(chalk.bgBlack.white(` ${letter.toUpperCase()} `))
  );

  [...word].map((letter, index) => {
    if (randomWord.includes(String(letter))) {
      resArr[index] = chalk.bgYellow.black(` ${letter.toUpperCase()} `);
    }
    if (letter === randomWord[index]) {
      count++;
      resArr[index] = chalk.bgGreen.black(` ${letter.toUpperCase()} `);
    }
  });
  return [count, resArr];
};

module.exports = checkWord;
