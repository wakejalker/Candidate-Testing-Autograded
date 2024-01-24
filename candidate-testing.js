const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ",  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
// this variable gave me trouble. was just candidateAnswers; at first 


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name. ");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question("Question 1: " + question);

// replace above ^ for part 2 with a loop that programmatically asks each question in the array and stores the user’s responses.

// for (let i = 0; i < questions.length; i++){
//   candidateAnswers = input.question(questions[i]);
//   if (candidateAnswers == correctAnswers) {
//     candidateAnswers.push();
//   } 
// }
// // not storing answers

  // for (let i = 0; i < questions.length; i++){
  //   candidateAnswers.push(input.question(questions[i]));
  // }
  // // throws error

  // for (let i = 0; i < questions.length; i++){
  //   candidateAnswers[i] = input.question(questions[i]);
  // }
  // // throws error

  // for (let i = 0; i < questions.length; i++){
  //   candidateAnswers = input.question(questions[i]);
  // }
  // // when logged, just stored the last answer 

  for (let i = 0; i < questions.length; i++){
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }


  
}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (candidateAnswer == correctAnswer) {
//   console.log("Correct!")
//  } else { (candidateAnswer != correctAnswer) 
//   console.log("Incorrect.")
// } 

// Pt 2 Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate’s responses in addition to the corresponding correct answers.

// for (let i = 0; i < candidateAnswers.length; i++){
//   console.log(`${i+1}) Your answer: ${candidateAnswers[i]}. Correct answer: ${correctAnswers[i]}`);
// }
// this works but fails npm test. need to add validation? 

for (let i = 0; i < candidateAnswers.length; i++){
  if (candidateAnswers[i] === correctAnswers[i]){
    console.log(`${i+1}) Your answer: ${candidateAnswers[i]}. Correct!`)
  } else {
    console.log(`${i+1}) Incorrect. Your answer: ${candidateAnswers[i]}. Correct answer: ${correctAnswers[i]}`);
  }
}
// says 3 is incorrect for last answer.. updated variable to be string and that worked


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + ".");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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