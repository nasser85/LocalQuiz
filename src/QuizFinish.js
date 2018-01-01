import React, { Component } from 'react';
import Database from './Database'
import './App.css';
import './QuizIntro.css';

export default class QuizFinish extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            {this.props.children}
            </div>
        )
    }
}
