import React, { Component } from 'react';
import './App.css'
import FormAddTask from './components/FormAddTask';
import FormFilter from './components/FormFilter';
import TableItems from './components/TableItems';
import { updateTasks, getTasks } from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filteredItems: null,
      filters: {},
    };

    getTasks().then((tasks) => {
      if (!tasks) return;
      this.setState({
        items: tasks,
      });
    })

    this.setTask = this.setTask.bind(this);
    this.changeStatusTask = this.changeStatusTask.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
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

  changeFilter(value, field) {
    const filters = Object.assign({}, this.state.filters);
    if (value) {
      filters[field] = value;
    } else {
      delete filters[field];
    }
    this.filtering(filters);
  }

  filtering(filters) {
    if (Object.keys(filters).length === 0 && filters.constructor === Object) {
      this.setState({
        filteredItems: null,
        filters,
      });
      return;
    }
    let filteringItems = this.state.items;
    Object.keys(filters).forEach(field => {
      filteringItems = filteringItems.filter(item => {
        return item[field] === filters[field];
      })
    })
    this.setState({
      filteredItems: filteringItems,
      filters,
    });
  }

  render() {
    return (
      <div className="app">
        <FormAddTask addTask={ this.setTask } />
        <FormFilter
          isShow={ Boolean(this.state.items.length) }
          changeFilter={ this.changeFilter }
        />
        <TableItems
          items={ this.state.filteredItems || this.state.items }
          changeStatusTask={ this.changeStatusTask }
        />
      </div>
    );
  }
}

export default App;
