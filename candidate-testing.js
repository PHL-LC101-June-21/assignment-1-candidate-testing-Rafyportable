const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ["Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
"What is the minimum crew size for the ISS? "];

let correctAnswer = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswer = [];
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

let input = require('readline-sync');
candidateName = input.question("What is your name? ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i=0; i <= question.length - 1; i++){
  candidateAnswer[i] = input.question(question[i]);
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(i=0; i <= correctAnswer.length - 1; i++){
    console.log(`Your Answer: ${candidateAnswer[i]}\nCorrect Answer: ${correctAnswer[i]}\n`)
  }

// if (candidateAnswer === correctAnswer) {

//   console.log("Correct!");

// } else {

//   console.log("Sorry that's not correct :(, it's Sally Ride");

// }

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName + "!");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};