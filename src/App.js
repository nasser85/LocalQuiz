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
  renderTakeQuiz() {
    return (
      <QuizMenu></ QuizMenu>
    )
  }
  renderMakeQuiz() {
    return (
      <QuizMenu></ QuizMenu>
    )

  }
  renderMainMenu() {
    return (
      <Header sectionTitle={'The light weight quiz maker that stores to your local storage!'}>
        <div onClick={this.makeQuiz} className="card app-btn"><p className="app-btn-text">Make a Quiz</p></div>
        <div onClick={this.takeQuiz} className="card app-btn"><p className="app-btn-text">Take a Quiz</p></div>
      </Header>
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
