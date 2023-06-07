//All ui Objects here
function UI(){
    this.btn_start=document.querySelector('.btn-start'),
    this.next_btn= document.querySelector('.next_btn'),
    this.quiz_box=document.querySelector('.quiz-box'),
    this.score_box=document.querySelector('.score_box'),
    this.option_list=document.querySelector('.option_list'),
    this.question_text = document.querySelector('.question_text'),
    this.replay_btn=document.querySelector('.btn-replay'),
    this.quit_btn=document.querySelector('.btn-quit'),
    this.time_text=document.querySelector('.time_text'),
    this.time_second=document.querySelector('.time_second'),
    this.time_line=document.querySelector('.time_line'),

    this.correctAnswerCount=0;
}
UI.prototype.showQuestion=function(get) {
    let question = `<span>${get.questionText}</span>`;
    let options = '';

    for (const answer in get.answerOptions) {
        options += `
        <div class="option">
          <span><b>${answer}</b>: ${get.answerOptions[answer]}</span>
          <div class="icon"><i></i></div>
        </div>
      `;
    }

    this.question_text.innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll('.option');
    for (const opt of option) {
        opt.setAttribute('onclick', 'optionSelected(this)');
    }
}
UI.prototype.showQuestionCount=function(questionOrder,totalQuestion){
    let tag=`<span class="badge bg-warning">${questionOrder}/${totalQuestion}</span>`;
    document.querySelector(".quiz-box .question_index").innerHTML=tag;
}

UI.prototype.showScore=function(correct,total){
    let tag=`<span class="badge bg-warning">You answered correctly ${correct} out of ${total} questions </span>`;
    document.querySelector(".score_box .score-text").innerHTML=tag;
}
