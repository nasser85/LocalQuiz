import React, { Component } from 'react';
import Database from './Database'
import './App.css';
import './QuizIntro.css';

export default class QuizFinish extends Component {
    constructor(props) {
        super(props);
        this.retakeQuiz = this.retakeQuiz.bind(this);
        this.quizMenu = this.quizMenu.bind(this);
    }
    retakeQuiz() {
        this.props.onRetakeQuiz();
    }
    quizMenu() {
        this.props.onReturnToQuizMenu();
    }
    render() {
        return (
            <div>
            {this.props.children}
            <button onClick={this.retakeQuiz}>Retake Quiz</button>
            <button onClick={this.quizMenu}>Quiz Menu</button>
            </div>
        )
    }
}
