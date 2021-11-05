//Global variables//
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var scoreEl = document.getElementById("results");

var timerEl = document.getElementById("timer");
//set a time
var timeLeft = 60;

var questionNumber = -1;

const questionContainerArr = [

    {question: "Which language is used for styling web pages?", answers:["HTML", "JQuery", "CSS", "XML"], correctAnswer: "CSS"},

    {question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?", answers: ["if(x2", "if(x=2)", "if(x==2)", "if(x!=2)"], correctAnswer:"if(x==2)"},

    {question: "What will the code return? Boolean(3 < 7)", answers:["True", "False"], correctAnswer: "True"},
    
    {question: "Which method will you use to round the number 24.76 to the nearest integer?", answers:["round(24.76", "rnd(24.76)", "Math.round(24.76)", "Math.rnd(24.76)"], correctAnswer: "Math.round(24.76)"},

    {question: "Which of the following statements will show a message as well as ask for user input in a popup?", answers: ["alert()", "prompt()", "confirm()", "message()"], correctAnswer: "prompt()" }
]

//starting quiz and timer..//

function codeQuiz() {

    document.getElementById("enter").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    startTimer();

    quizQuestions();
};

function startTimer () {
    var timer = setInterval (function() {
        timeLeft --;
        timerEl.textContent = " Time: " + timeLeft + "seconds remaining";
        //if times up and questions done clear time- showscore//
        if(timeLeft === 0 || questionNumber === questionContainerArr.length) {
            clearInterval(timer);
            setTimeout(showScore, 200);
        }
    }, 1000);
};


function quizQuestions () {
    questionNumber ++

    questionEl.textContent = questionContainerArr[questionNumber].question

    answerEl.innerHTML = "";

    //for correct answer
    var answers = questionContainerArr[questionNumber].correctAnswer;

    //generating next question//
    for(var i = 0; i < answers.length; i++) {
        var nextAnswer = document.createElement("button");
        nextAnswer.textContent = answers[i];
    }
};

    //choice buttons-- Correct --- Incorrect//

    answerEl.addEventListener("click", function(event) {
        var progressEl = document.getElementsByClassName("progress") [0]

        if(answers === event.target.textContent) {
     //correct answer//
            progressEl.textContent = "**Correct Answer**"
            setTimeout(hideProgress, 3000);
            showProgress();
        }
     //incorrect answer//
        else {
            progressEl.textContent = " :/ Incorrect Answer :/ ";
            setTimeout(hideProgress, 3000);
            timeLeft = timeLeft - 10;
            showProgress();
        }
        quizQuestions();
    });

    function hideProgress() {
        var progressEl = document.getElementsByClassName("progress") [0]
        progressEl.removeAttribute("style");
    };
    //showing score
    var showScore = function() {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("results").classList.remove("hidden");
        scoreEl.textContent = "Score" + timeLeft;
    };

    document.querySelector("#start-btn").addEventListener("click", codeQuiz);