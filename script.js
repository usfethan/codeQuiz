//Global variables//
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var scoreEl = document.getElementById("results");

var timerEl = document.getElementById("timer");
//lets give 60 seconds
var timeLeft = 60;

const questions = [
    {question: "Which language is used for styling web pages?", answers:["HTML", "JQuery", "CSS", "XML"], correctAnswer: "CSS"},

    {question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?", answers: ["if(x2", "if(x=2)", "if(x==2)", "if(x!=2)"], correctAnswer:"if(x==2)"},

    {question: "What will the code return? Boolean(3 < 7)", answers:["True", "False"], correctAnswer: "True"},
    
    {question: "Which method will you use to round the number 24.76 to the nearest integer?", answers:["round(24.76", "rnd(24.76)", "Math.round(24.76)", "Math.rnd(24.76)"], correctAnswer: "Math.round(24.76)"},
    {question: "Which of the following statements will show a message as well as ask for user input in a popup?", answers: ["alert()", "prompt()", "confirm()", "message()"], correctAnswer: "prompt()" }
]