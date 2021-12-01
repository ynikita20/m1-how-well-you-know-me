let readlineSync = require("readline-sync");

const chalk = require('chalk');

let score = 0;

// data of high score
let highScores = [
  {
    name: "Nikita",
    score: 4,
  },

  {
    name: "Vini",
    score: 3,
  },
]

// array of objects
let questions = [{
  question: "Where do I live❔ " + chalk.cyanBright("a)Ghaziabad b)Delhi c)Meerut  "),
  answer: "a"
}, 

{
  question: "When is my Birthday❔ "+  chalk.cyanBright("a)20 December b)2 June c)12 Aug  "),
  answer: "a"
}, 

{
  question: "What am I currently working on❔ " + chalk.cyanBright("a)AI b)ML c)JS  "),
  answer: "c"
}, 

{
  question: "My favorite anime would be❔ "+ chalk.cyanBright("a)One Piece b)Naruto c)Death Note  "),
  answer: "a"
},
{
  question: "Where do I study? " + chalk.cyanBright("a)BITS b)EIT c)Amity  "),
  answer: "b"
}
];

function welcome() {
 let userName = readlineSync.question(("What's your name? "));

  console.log("Welcome "+ chalk.cyanBright(userName) + " to DO YOU KNOW " + chalk.bold(" Nikita ") + "?");
  console.log(chalk.underline('Just type the option initial(a,b, or c)'));
  console.log(' ')
}


// play function
function play(question, answer) {
  
  let userAnswer = readlineSync.question(chalk.yellowBright(question));
  

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("✅ right ✅"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("❌ wrong ❌"));
   
  }

  console.log(chalk.black.bgWhite.bold ("current score: ", score));
  console.log("-------------")
} 

function game() {
  for (let i=0; i<questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showLeaderBoard() {
  
  console.log(' ')
  console.log(chalk.green("Check out the Leaderboard"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}

function updateHightScore(highScores){
  console.log(' ')
  console.log("YAY! You SCORED: ", score);

  if(score > highScores[0].score){
    console.log(chalk.green('Congratulations on beating all previous High Scores. Make sure to send me a Screenshot, so that I can update about your achievement 😃 '));
} 
  }
  
welcome();
game();
updateHightScore(highScores);
showLeaderBoard();

