import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Menu, Segment } from 'semantic-ui-react';

import PageAbout from './pages/PageAbout';
import PageHome from './pages/PageHome';
import PageInQA from './pages/PageInQA';
import PageRegulation from './pages/PageRegulation';

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
                <Menu.Item
                  name='inQA'
                  as={Link}
                  to='/inQA'
                  active={this.state.activeItem === 'inQA'}
                  onClick={this.handleItemClick}
                >
                  inQA.by
                </Menu.Item>
                <Menu.Item
                  name='regulation'
                  as={Link}
                  to='/regulation'
                  active={this.state.activeItem === 'regulation'}
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

                <Route
                  path="/inQA"
                  component={ PageInQA }
                />
                <Route
                  path="/regulation"
                  component={ PageRegulation }
                />
              </Segment>
            </Grid.Column>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
