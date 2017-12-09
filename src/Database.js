export default class Database {
  static init() {
    if (!window.localStorage.quizzes) {
      const quizzes = [
      {
          id: 1,
          name: 'Sample Math Quiz',
          questions: [
            {
              question: "What is the cube root of 64?",
              answerChoices: [
                "8",
                "4",
                "9",
                "3"
              ],
              correctAnswer: "4"
            },
            {
              question: "What is the square root of 75?",
              answerChoices: [
                "2√5",
                "5√3",
                "5√2",
                "3√5"
              ],
              correctAnswer: "5√3"
            },
            {
              question: "What is the cube root of 27?",
              answerChoices: [
                "3",
                "4",
                "5",
                "7"
              ],
              correctAnswer: "3"
            },
            {
              question: "Solve for x:\nx + 6 = 3(x - 2)",
              answerChoices: [
                "4",
                "6",
                "12",
                "2"
              ],
              correctAnswer: "6"
            },
            {
              question: "Solve for x:\n2x - 5 = 9x + 9",
              answerChoices: [
                "-14",
                "2",
                "14",
                "-2"
              ],
              correctAnswer: "-2"
            }
          ]
      }
    ];
      window.localStorage.quizzes = this.encodeData(quizzes);
      window.localStorage.currIndex = this.encodeData(2);
    }
  }
  static fetchQuizById(id) {
    return this.decodeData(window.localStorage.quizzes)[id];
  }
  static encodeData(obj) {
    return window.btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
  }
  static decodeData(str) {
    return JSON.parse(decodeURIComponent(escape(window.atob(str))));
  }
  static createQuiz() {

  }
  static createQuestion() {

  }

}
