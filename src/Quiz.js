import React, { Component } from 'react';
import Database from './Database';
import Utils from './Utils';
import Item from './Item';
import QuizIntro from './QuizIntro';
import QuizFinish from './QuizFinish';
import './App.css';
import './Quiz.css';

class Question extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="question">
                <p className="question-text">{this.props.children}</p>
            </div>
        )
    }
}

class Answers extends Component {
    constructor(props) {
        super(props);
        this.renderAnswer = this.renderAnswer.bind(this);
        this.answerQuestion = this.answerQuestion.bind(this);
    }
    answerQuestion(answer) {
        this.props.onChange(answer);
    }
    renderAnswer(answerText) {
        return (
            <div key={this.props.children.indexOf(answerText)}
                 className="sm-6 answer-wrapper">
                 <div className="answer-btn card"
                      onClick={() => this.answerQuestion(answerText)}>
                    <p className="answer-text">{answerText}</p>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="answers">
                {this.props.children.map(this.renderAnswer)}
            </div>
        )
    }
}

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        Database.init();
        const quiz = Database.fetchQuizById(this.props.id).questions;
        const question = quiz[0].question;
        const answers = quiz[0].answerChoices;
        const correctAnswer = quiz[0].correctAnswer;
        this.state = {
            currentQuestion: 0,
            questionText: question,
            answers: answers,
            correctAnswer: correctAnswer,
            numberCorrect: 0,
            quiz: quiz,
            quizState: 'start'
        }
        this.answerQuestion = this.answerQuestion.bind(this);
        this.enterQuestion = this.enterQuestion.bind(this);
        this.exitQuestion = this.exitQuestion.bind(this);
        this.renderStart = this.renderStart.bind(this);
        this.renderFinish = this.renderFinish.bind(this);
        this.renderQuiz = this.renderQuiz.bind(this);
        this.startQuiz = this.startQuiz.bind(this);
    }
    componentWillMount() {
        //setTimeout(this.enterQuestion, 0);
    }
    componentWillUpdate() {
        setTimeout(this.enterQuestion, 0);
    }
    enterQuestion() {
        const el = document.getElementsByClassName('question-wrapper')[0];
        if (el) {
            if (el.classList.contains('leave')) {
                el.classList.remove('leave');
            }
            el.classList.add('start');
            setTimeout(() => {
                el.classList.remove('start');
            }, 50)
        }
    }
    exitQuestion() {
        const el = document.getElementsByClassName('question-wrapper')[0];
        el.classList.add('leave');
        setTimeout(() => {
            el.classList.add('start');
        }, 1000);

    }
    answerQuestion(answer) {
        this.exitQuestion();
        var numberCorrect = this.state.numberCorrect;
        var nextQuestion = this.state.currentQuestion + 1;
        numberCorrect += answer == this.state.correctAnswer ? 1 : 0;
        console.log('number correct: ', numberCorrect);
        if (nextQuestion == this.state.quiz.length) {
            setTimeout(() => {
                this.setState({
                    numberCorrect: numberCorrect,
                    currentQuestion: nextQuestion,
                    quizState: 'finished'
                });
            }, 1200);
        } else {
            const question = this.state.quiz[nextQuestion];
            setTimeout(() => {
                this.setState({
                    numberCorrect: numberCorrect,
                    currentQuestion: nextQuestion,
                    questionText: question.question,
                    answers: Utils.randomize(question.answerChoices),
                    correctAnswer: question.correctAnswer
                });
            }, 1200);
        }

    }
    startQuiz() {
        this.setState({quizState: 'loaded'});
    }
    renderStart() {
        return (
            <QuizIntro onBegin={this.startQuiz}><p>Hello</p></QuizIntro>
        )

    }
    renderQuiz() {
        return (
            <div className="question-gutter">
            <div className="question-wrapper start card sm-12 no-gutter">
                <Question>{this.state.questionText}</Question>
                <Answers onChange={this.answerQuestion} answers={this.state.answers}>{this.state.answers}</Answers>
            </div>
            </div>
        )
    }
    renderFinish() {
        return (
            <QuizFinish><p>You have completed the Quiz!</p></QuizFinish>
        )
    }
    render() {
        if (this.state.quizState == 'start') {
            return this.renderStart();
        } else if (this.state.quizState == 'loaded') {
            return this.renderQuiz();
        } else if (this.state.quizState == 'finished') {
            return this.renderFinish();
        } else {
            throw Error('bad');
        }

    }
}
