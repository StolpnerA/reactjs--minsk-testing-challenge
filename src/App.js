import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PageAbout from './pages/PageAbout';
import PageHome from './pages/PageHome';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>

          <Route
            exact
            path="/"
            component={ PageHome }
          />

          <Route
            path="/about"
            component={ PageAbout }
          />
        </Router>
      </div>
    );
  }
}

export default App;
