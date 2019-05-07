import React, { Component } from 'react';
import './App.css'
import FormAddTask from './components/FormAddTask';
import TableItems from './components/TableItems';
import { updateTasks, getTasks } from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };

    getTasks().then((tasks) => {
      this.setState({
        items: tasks,
      });
    })

    this.setTask = this.setTask.bind(this);
    this.changeStatusTask = this.changeStatusTask.bind(this);
  }

  setTask(task) {
    let { items } = this.state;
    items.push(task);
    this.setState({
      items,
    });
    updateTasks(items);
  }

  changeStatusTask(value, indexItem) {
    const { items } = this.state;
    items[indexItem].done = value;
    this.setState({
      items,
    });
    updateTasks(items);
  }

  render() {
    return (
      <div className="app">
        <FormAddTask addTask={ this.setTask } />
        <TableItems
          items={ this.state.items }
          changeStatusTask={ this.changeStatusTask }
        />
      </div>
    );
  }
}

export default App;
