import React, { Component } from 'react';
import logo from './logo.svg';
import Database from './Database'
import './App.css';

export default class Item extends Component {
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
