import React, { Component } from 'react';
import logo from './logo.svg';
import Database from './Database';
import Item from './Item';
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
            currentQuestion: 1,
            questionText: question,
            answers: answers,
            correctAnswer: correctAnswer,
            numberCorrect: 0,
            quiz: quiz
        }
        this.answerQuestion = this.answerQuestion.bind(this);
        this.enterQuestion = this.enterQuestion.bind(this);
        this.exitQuestion = this.exitQuestion.bind(this);
    }
    componentWillMount() {
        setTimeout(this.enterQuestion, 0);
    }
    componentWillUpdate() {
        setTimeout(this.enterQuestion, 0);
    }
    enterQuestion() {
        const el = document.getElementsByClassName('question-wrapper')[0];
        if (el.classList.contains('leave')) {
            el.classList.remove('leave');
        }
        el.classList.add('start');
        setTimeout(function() {
            el.classList.remove('start');
        }, 50)
    }
    exitQuestion() {
        const el = document.getElementsByClassName('question-wrapper')[0];
        el.classList.add('leave');
        setTimeout(function() {
            el.classList.add('start');
        }, 1000);

    }
    answerQuestion(answer) {
        this.exitQuestion();
        var numberCorrect = this.state.numberCorrect;
        var nextQuestion = this.state.currentQuestion + 1;
        numberCorrect += answer == this.state.correctAnswer ? 1 : 0;
        const question = this.state.quiz[nextQuestion];
        const questionObj = this;
        setTimeout(function() {
            questionObj.setState({
                numberCorrect: numberCorrect,
                currentQuestion: nextQuestion,
                questionText: question.question,
                answers: question.answerChoices,
                correctAnswer: question.correctAnswer
            });
        }, 1500);
    }
    render() {
        return (
            <div className="question-wrapper start card sm-12 no-gutter">
                <Question>{this.state.questionText}</Question>
                <Answers onChange={this.answerQuestion} answers={this.state.answers}>{this.state.answers}</Answers>
            </div>
        )

    }
}
