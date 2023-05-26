var questions = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
    var quizContainer = document.getElementById('quiz');
    var questionText = document.getElementById('question');
    var optionA = document.getElementById('a_text');
    var optionB = document.getElementById('b_text');
    var optionC = document.getElementById('c_text');
    var optionD = document.getElementById('d_text');

    var currentQ = questions[currentQuestion];

    questionText.textContent = currentQ.question;
    optionA.textContent = currentQ.a;
    optionB.textContent = currentQ.b;
    optionC.textContent = currentQ.c;
    optionD.textContent = currentQ.d;
}

function submitAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        if (selectedOption.id === questions[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    var quizContainer = document.getElementById('quiz');
    var resultContainer = document.getElementById('result');
    var scoreText = document.getElementById('score');

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    scoreText.textContent = 'You scored ' + score + ' out of ' + questions.length + ' questions.';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    var quizContainer = document.getElementById('quiz');
    var resultContainer = document.getElementById('result');

    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    displayQuestion();
}

displayQuestion();
