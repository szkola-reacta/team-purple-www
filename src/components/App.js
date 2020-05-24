import React, { Component } from 'react';
import StartView from './StartView.js'
import '../css/App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="wrapper">
        <header className="navigation"></header>
        <main>
          <StartView />


        </main>

      </div>
    );
  }
}

export default App;