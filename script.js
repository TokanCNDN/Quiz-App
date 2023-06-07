const ui = new UI();
const quiz = new Quiz(questions)

ui.btn_start.addEventListener('click', function () {
    ui.quiz_box.classList.add("active")
    startTimer(10);
    startTimerLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionCount(quiz.questionIndex + 1, quiz.questions.length)
})
ui.next_btn.addEventListener('click', function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        clearInterval(counter)
        startTimerLine();
        startTimer(10);
        ui.showQuestion(quiz.getQuestion());
        ui.showQuestionCount(quiz.questionIndex + 1, quiz.questions.length)
        ui.next_btn.classList.remove("show");
    }
    else {
        ui.showScore(ui.correctAnswerCount, quiz.questions.length)
        ui.quiz_box.classList.remove("active")
        ui.score_box.classList.add("active")
    }
})
ui.replay_btn.addEventListener('click', function () {
    ui.correctAnswerCount = 0;
    quiz.questionIndex = 0;
    ui.score_box.classList.remove("active")
    ui.btn_start.click();
})
ui.quit_btn.addEventListener('click', function () {
    window.location.reload();
})


function optionSelected(option) {
    let answer = option.querySelector('span b').textContent;
    let icon = option.querySelector('i');
    ui.next_btn.classList.add("show");
    clearInterval(lineCounter)
    clearInterval(counter)
    let question = quiz.getQuestion();
    if (question.checkAnswer(answer)) {
        option.classList.add('correct');
        icon.className = 'fas fa-check';
        ui.correctAnswerCount += 1;
    } else {
        option.classList.add('incorrect');
        icon.className = 'fas fa-times';
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add('disable');
    }
}

let counter;
let lineCounter
function startTimer(time) {

    counter = setInterval(timer, 1000);
    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "Time Over"
            let answer = quiz.getQuestion().correctAnswer;

            for (const option of ui.option_list.children) {
                let icon = option.querySelector('i');
                if (option.querySelector("span b").textContent == answer) {
                    option.classList.add("correct");
                    icon.className = 'fas fa-check';
                }
                option.classList.add("disable");
            }
            ui.next_btn.classList.add("show")
        }
    }
}
function startTimerLine() {
    let line_width = 0;
    lineCounter = setInterval(timer, 20);
    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";
        if (line_width >= 550) {
            clearInterval(lineCounter)
        }
    }
}