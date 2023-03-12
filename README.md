<h1 align="center">
Terminal Wordle
</h1>


[Wordle](https://www.nytimes.com/games/wordle/index.html) in the terminal: A command-line game for guessing a five-letter word using feedback from partial matches.

<center>
<img src="https://imgur.com/hKfMmn8.gif" width="100%">
</center>

## Install Guide 
Clone the repo
```bash
git clone https://github.com/neilchetna/Terminal-Wordle
```
Install the dependencies
```bash
cd Terminal-Wordle
npm install
```

Run wordle
```bash
npm run wordle
```

## How to Play
To start a new game simply run the `npm run wordle`. You will be prompted to guess a five-letter word. After each guess you will receive feedback on which letter are correct and in the correct position, and which letter are correct but in the wrong position. 

You have a total of 6 attempts to guess the word correctly. If you do not guess the word in 6 attempts, the game is over and you lose.

## Acknowledgements
This project was inspired by the popular online word-guessing game of the same name. The code was written entirely by me. 