const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "Which is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
  { question: "What is the color of the sky?", options: ["Blue", "Green", "Red", "Yellow"], answer: "Blue" },
  { question: "What is 5 x 5?", options: ["10", "15", "20", "25"], answer: "25" },
  { question: "Which is the smallest ocean in the world?", options: ["Indian", "Arctic", "Atlantic", "Pacific"], answer: "Arctic" },
  { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Tolkien", "Rowling"], answer: "Shakespeare" },
  { question: "Which is the fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Tiger"], answer: "Cheetah" },
  { question: "What is the square root of 16?", options: ["2", "4", "6", "8"], answer: "4" },
  { question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: "Carbon Dioxide" },
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("result-container").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const questionObj = questions[currentQuestionIndex];
  document.getElementById("question").innerText = `Q${currentQuestionIndex + 1}: ${questionObj.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  questionObj.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }
  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("game-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").innerText = `Your score is ${score} out of ${questions.length}.`;
}

// Initialize game on page load
startGame();
