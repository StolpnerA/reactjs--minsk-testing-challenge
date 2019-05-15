import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Menu, Segment } from 'semantic-ui-react';

import PageAbout from './pages/PageAbout';
import PageHome from './pages/PageHome';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Home',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div className="app">
        <Router>
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name='Home'
                  as={Link}
                  to='/'
                  active={this.state.activeItem === 'Home'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='About'
                  as={Link}
                  to='/about'
                  active={this.state.activeItem === 'About'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                <Route
                  exact
                  path="/"
                  component={ PageHome }
                />

                <Route
                  path="/about"
                  component={ PageAbout }
                />
              </Segment>
            </Grid.Column>
          </Grid>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav> */}

          {/* <Route
            exact
            path="/"
            component={ PageHome }
          />

          <Route
            path="/about"
            component={ PageAbout }
          /> */}
        </Router>
      </div>
    );
  }
}

export default App;
