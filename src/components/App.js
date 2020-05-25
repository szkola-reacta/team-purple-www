import React, { Component } from 'react';
import StartView from './StartView.js';
import '../css/App.css';
import Footer from './Footer.js';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='wrapper'>
        <header className='navigation'></header>
        <main>
          <StartView />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
