import React, { Component } from 'react';
import logo from './logo.svg';
import Database from './Database';
import Header from './Header';
import Item from './Item';
import Quiz from './Quiz';
import './App.css';

export default class QuizMenu extends Component {
    constructor(props) {
        super(props);
        Database.init();
        const items = Database.decodeData(window.localStorage.quizzes);
        this.state = {
            quiz: null,
            quizId: null,
            menuItems: items,
            sectionTitle: 'Select a Quiz to Take.'
        }
        this.renderQuiz = this.renderQuiz.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.loadQuiz = this.loadQuiz.bind(this);
    }
    renderQuiz() {
        return (
            <Quiz id={this.state.quizId}></Quiz>
            )
    }

    loadQuiz(id) {
        const quiz = Database.fetchQuizById(id);
        this.setState({quiz: quiz});
        this.setState({quizId: id});
        this.setState({sectionTitle: quiz.name});
    }
    renderItem(item) {
        return (
            <Item id={item.id}
                  key={item.id}
                  onLoad={this.loadQuiz}>{item.name}</Item>
        )
    }
    renderMenu() {
        return (
            <div>
                {this.state.menuItems.map(this.renderItem)}
            </div>
            )
    }
    render() {
        return (
            <Header sectionTitle={this.state.sectionTitle}>
                {this.state.quiz ? this.renderQuiz() : this.renderMenu()}
            </Header>
        )
    }
}

