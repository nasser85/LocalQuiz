import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.goHome = this.goHome.bind(this);
    }
    goHome() {
        this.props.returnHome();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                  <img onClick={this.goHome} src={logo} className="App-logo" alt="logo" />
                  <h1 onClick={this.goHome} className="App-title">LOCAL QUIZ</h1>
                </header>
                <p className="App-intro">
                  {this.props.sectionTitle}
                </p>
                {this.props.children}
            </div>
        )
    }
 }
