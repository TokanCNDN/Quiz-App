function Question(questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer
}

let questions = [
    new Question("1-Which language is older?", { a: "Java", b: "C", c: "Python", d: "JavaScript" }, "b"),
    new Question("2-What is the abbreviation of CSS ?", { a: "Central Style Sheets", b: "Cascading Style Sheets", c: "Cascading Simple Sheets", d: "Cars SUVs SailBoats" }, "b"),
    new Question("3What is the abbreviation of HTML ?", { a: "Hypertext Markup Language", b: "Hypertext Markdown Language", c: "Hyperloop Machine Language", d: "Helicopters Terminals Motorboats Lamborginis" }, "a"),
    new Question("4-In which year was JavaScript released?", { a: "1996", b: "1995", c: "1994", d: "None of the above" }, "b")
]
