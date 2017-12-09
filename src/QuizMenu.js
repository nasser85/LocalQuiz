import React, { Component } from 'react';
import logo from './logo.svg';
import Database from './Database';
import Header from './Header';
import Item from './Item';
import './App.css';

export default class QuizMenu extends Component {
    constructor(props) {
        super(props);
        Database.init();
        const items = Database.decodeData(window.localStorage.quizzes);
        this.state = {
            quiz: null,
            menuItems: items
        }
        this.renderQuiz = this.renderQuiz.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.loadQuiz = this.loadQuiz.bind(this);
    }
    renderQuiz() {

    }
    loadQuiz() {

    }
    renderItem(item) {
        return (
            <Item id={item.id}
                  key={item.id}
                  onClick={()=>this.loadQuiz(item.id)}>{item.name}</Item>
        )
    }
    renderMenu() {
        console.log(this.state.menuItems)
        return (
            <Header sectionTitle={'Select a Quiz to Take.'}>
                {this.state.menuItems.map(this.renderItem)}
            </Header>
            )
    }
    render() {
        return this.state.quiz ? this.renderQuiz() : this.renderMenu();
    }
}

