import React, { Component } from 'react';
import './App.css'
import FormAddTask from './components/FormAddTask';
import TableItems from './components/TableItems';
import { STORAGE_KEY } from './helpers/constants';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
    };

    this.setTask = this.setTask.bind(this);
  }

  setTask(task) {
    let { items } = this.state;
    items.push(task);
    this.setState({
      items: items,
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  render() {
    return (
      <div className="app">
        <FormAddTask addTask={ this.setTask } />
        <TableItems items={ this.state.items }/>
      </div>
    );
  }
}

export default App;
