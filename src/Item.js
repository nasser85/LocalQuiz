import React, { Component } from 'react';
import logo from './logo.svg';
import Database from './Database'
import './App.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.selectQuiz = this.selectQuiz.bind(this);
    }
    selectQuiz() {
        this.props.onLoad(this.props.id);
    }
    render() {
        return (
            <div onClick={this.selectQuiz}>
            {this.props.children}
            </div>
        )
    }
}
