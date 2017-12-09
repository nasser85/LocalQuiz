import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">LOCAL QUIZ</h1>
                </header>
                <p className="App-intro">
                  {this.props.sectionTitle}
                </p>
                {this.props.children}
            </div>
        )
    }
 }
