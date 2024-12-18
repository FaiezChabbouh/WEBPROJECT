let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswers: [2]
    },
    {
        question: "Which of these is a programming language?",
        options: ["Python", "Snake", "JavaScript", "Java"],
        correctAnswers: [0, 2, 3]
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Newton", "Einstein", "Tesla", "Curie"],
        correctAnswers: [1]
    }
];

const startQuizButton = document.getElementById('start-quiz-button');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreSpan = document.getElementById('score');
const emoji = document.getElementById('emoji');
const restartButton = document.getElementById('restart-button');
const viewAnswersButton = document.getElementById('view-answers');
const answersContainer = document.getElementById('answers');
const multiAnswerWarning = document.getElementById('multi-answer-warning');

// Start quiz function
startQuizButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);
viewAnswersButton.addEventListener('click', showAnswers);

// Start the quiz
function startQuiz() {
    console.log("Start quiz button clicked");

    // Hide the Start Quiz button
    startQuizButton.classList.add('hidden');
    console.log("Start quiz button hidden");

    // Show the quiz container
    quizContainer.classList.remove('hidden');
    console.log("Quiz container shown");

    // Display the first question
    displayQuestion();
    console.log("First question displayed");
}

// Display a question
function displayQuestion() {
    console.log("Displaying question");

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
        console.error("No question found for index " + currentQuestionIndex);
        return;
    }

    questionContainer.textContent = currentQuestion.question;
    console.log("Question displayed: " + currentQuestion.question);

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionButton);
        console.log(`Option created: ${option} (Index: ${index})`);
    });

    nextButton.disabled = true;
    multiAnswerWarning.classList.add('hidden');
    console.log("Next button disabled and multi-answer warning hidden");
}

// Select an option
function selectOption(index) {
    console.log("Option selected: " + index);

    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = optionsContainer.querySelectorAll('.option-button');

    if (currentQuestion.correctAnswers.includes(index)) {
        optionButtons[index].classList.add('correct');
        console.log("Correct answer selected");
        score++;
    } else {
        optionButtons[index].classList.add('incorrect');
        console.log("Incorrect answer selected");
    }
    optionButtons.forEach(button => button.disabled = true);

    nextButton.disabled = false;
    console.log("Next button enabled");

    if (currentQuestion.correctAnswers.length > 1) {
        multiAnswerWarning.classList.remove('hidden');
        console.log("Multiple answers detected for this question");
    }
}

// Move to the next question
function nextQuestion() {
    console.log("Next question triggered");

    currentQuestionIndex++;
    console.log("Current question index: " + currentQuestionIndex);

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// End the quiz
function endQuiz() {
    console.log("Ending quiz");

    quizContainer.classList.add('hidden');
    console.log("Quiz container hidden");

    scoreContainer.classList.remove('hidden');
    console.log("Score container shown");

    scoreSpan.textContent = score;
    console.log("Score displayed: " + score);

    emoji.textContent = score >= questions.length / 2 ? '😊' : '😐';
    console.log("Emoji set: " + emoji.textContent);
}

// Restart the quiz
function restartQuiz() {
    console.log("Restarting quiz");

    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    startQuizButton.classList.remove('hidden');
    console.log("Start quiz button shown");

    nextButton.disabled = true;
    optionsContainer.innerHTML = '';
}

// Show the correct answers
function showAnswers() {
    console.log("Showing answers");

    answersContainer.classList.remove('hidden');
    answersContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const questionAnswer = document.createElement('div');
        questionAnswer.textContent = `${question.question} - Correct Answers: ${question.correctAnswers.map(i => question.options[i]).join(', ')}`;
        answersContainer.appendChild(questionAnswer);
        console.log(`Answer for question ${index + 1}: ${questionAnswer.textContent}`);
    });
}
