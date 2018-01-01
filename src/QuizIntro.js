import React, { Component } from 'react';
import Database from './Database'
import './App.css';
import './QuizIntro.css';

export default class QuizIntro extends Component {
    constructor(props) {
        super(props);
        this.beginQuiz = this.beginQuiz.bind(this);
    }
    beginQuiz() {
        this.props.onBegin();
    }
    render() {
        return (
            <div onClick={this.beginQuiz}>
            {this.props.children}
            </div>
        )
    }
}
