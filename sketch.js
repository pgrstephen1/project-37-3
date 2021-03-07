var canvas;
var gameState = 0;
var contestantCount;
var database;
var questions, contestant;
var form;
var quiz;

function setup(){
  canvas = createCanvas(800,600);
  database = firebase.database();

  form = new Form();
quiz = new Quiz;

  questions = new Question();
  quiz.getState();
  //quiz.start();
}


function draw(){
  background("pink");

  if(gameState === 0){
    form.display();
  }

  if(gameState === 1){
  clear();
  questions.display();
  }

}
