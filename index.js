
// input
var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your Name ? ");
console.log("Welcome"+ " " + userName + " DO YOU KNOW ROHAN");

var score=0;
function play(question,answer){

  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right!");
    score++;
    console.log("Current Score =" +" "+ score);
    console.log("--------------");
  }else{
    console.log("wrong");
    console.log("Current Score =" +" "+ score);
    console.log("--------------");
  }

}


var questions = [
  {

  question: "Where do i live ? ",
  answer: "Rasra",
},
{
  question:"Which is my Favourite book ? ",
  answer:"Zero to one",
},
{
  question:"Where is my college ? ", 
  answer:"Kanpur",
},
{
  question:"Where is my Hometown ? ", 
  answer:"Jamshedpur",
},
{
  question:"Which sport i love? ", 
  answer:"Cricket",
}
];


var userAnswer = readlineSync.question();
if(userAnswer==="yes"){
  console.log("starting the game");
  for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
}
else{

  console.log("Thanks for showing your interest in the game!");
}

console.log("YAY! your score is" + " " + score);




