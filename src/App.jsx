import * as React from "react";
import { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import mainLogo from './images/logo.png';
class App extends Component {
    render() {
        return (
            <div className="App"> 
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                      <img src={mainLogo}  alt="logo" />
                    <h2>Welcome to React using Fusebox </h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <h1>
                    instant load  time  
                </h1>
            </div>
        );
    }
}

export default App;
