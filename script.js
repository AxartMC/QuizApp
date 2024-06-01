let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Peter Griffin",
        "answer_2": "De Gisi",
        "answer_3": "Axart MC",
        "answer_4": "Marco",
        "right_answer": 2
    },
    {
        "question": "Wer ist der beste Rapper in der Schweiz?",
        "answer_1": "Peter Griffin",
        "answer_2": "De Gisi",
        "answer_3": "Axart MC",
        "answer_4": "Marco",
        "right_answer": 3
    },
    {
        "question": "Wer ist eine Cartoonfigur?",
        "answer_1": "Peter Griffin",
        "answer_2": "De Gisi",
        "answer_3": "Axart MC",
        "answer_4": "Marco",
        "right_answer": 1
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('./audio/success.mp3');
let AUDIO_FAIL = new Audio('./audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion < questions.length) {
        let percent = currentQuestion / questions.length;
        percent = Math.round(100 * percent);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;


        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
    else {
        let percent = currentQuestion / questions.length;
        percent = Math.round(100 * percent);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;

        document.getElementById('header-img').src = "./img/trophy.png";
        document.getElementById('questionBody').style = "display: none";
        document.getElementById('endScreen').style = '';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
        
    }
    else {
        AUDIO_FAIL.play();
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;

    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    }
}

function restartGame() {
    document.getElementById('header-img').src = "./img/pencil.jpg";
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = "display: none";
    currentQuestion = 0;
    rightQuestions = 0;
    showQuestion();
}