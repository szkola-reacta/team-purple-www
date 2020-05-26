
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'
import StartView from './StartView.js'
import FutureProject from './FutureProjects';
import Footer from './Footer.js';
import Goals from './Goals';
import '../css/App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="wrapper">
          <header className="navigation"></header>
          <main>
            <Header />
            <Route path="/" exact={true} component={StartView} />
            <Route path="/react" component={Goals} />
            <Route path="/projects" component={FutureProject} />

            <Footer />
          </main>

        </div>
      </Router>
    );
  }
}
export default App;

