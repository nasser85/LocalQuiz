import React, { Component } from 'react';
import './App.css';
import QuizMenu from './QuizMenu';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu: true,
      makeQuiz: false,
      takeQuiz: false
    }
    this.renderTakeQuiz = this.renderTakeQuiz.bind(this);
    this.renderMakeQuiz = this.renderMakeQuiz.bind(this);
    this.takeQuiz = this.takeQuiz.bind(this);
    this.makeQuiz = this.makeQuiz.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  takeQuiz() {
    this.setState({
      mainMenu: false,
      makeQuiz: false,
      takeQuiz: true
    })
  }
  makeQuiz() {
     this.setState({
      mainMenu: false,
      makeQuiz: true,
      takeQuiz: false
    })
  }
  goHome() {
   this.setState({
      mainMenu: true,
      makeQuiz: false,
      takeQuiz: false
    })
  }
  renderTakeQuiz() {
    return (
      <div>
        <Header returnHome={this.goHome} sectionTitle={'The light weight quiz maker that stores to your local storage!'} />
        <QuizMenu />
      </div>
    )
  }
  renderMakeQuiz() {
    return (
      <div>
        <Header returnHome={this.goHome} sectionTitle={'The light weight quiz maker that stores to your local storage!'} />
        <QuizMenu />
      </div>
    )

  }
  renderMainMenu() {
    return (
      <div>
        <Header returnHome={this.goHome} sectionTitle={'The light weight quiz maker that stores to your local storage!'} />
        <div onClick={this.makeQuiz} className="card app-btn"><p className="app-btn-text">Make a Quiz</p></div>
        <div onClick={this.takeQuiz} className="card app-btn"><p className="app-btn-text">Take a Quiz</p></div>
      </div>
    );
  }
  render() {
    if (this.state.mainMenu) {
      return this.renderMainMenu();
    } else if (this.state.makeQuiz) {
      return this.renderMakeQuiz();
    } else {
      return this.renderTakeQuiz();
    }
  }
}

export default App;
