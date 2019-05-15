import React, { Component } from 'react';

import FormAddTask from '../components/FormAddTask';
import FormFilter from '../components/FormFilter';
import TableItems from '../components/TableItems';
import TableActions from '../components/TableActions';

import { updateTasks, getTasks } from '../api';
import { FILTER_FIELDS } from '../helpers/constants';

class PageHome extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filteredItems: null,
      filters: {},
      selectedItems: [],
    };

    getTasks().then((tasks) => {
      if (!tasks) return;
      this.setState({
        items: tasks,
      });
    })

    this.setTask = this.setTask.bind(this);
    this.changeStatusTasks = this.changeStatusTasks.bind(this);
    this.deleteSelectedItems = this.deleteSelectedItems.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.handlerSelectedItems = this.handlerSelectedItems.bind(this);
    this.handlerChangeStatusTasks = this.handlerChangeStatusTasks.bind(this);
    this.handlerDeleteSelectedItems = this.handlerDeleteSelectedItems.bind(this);
    this.clearSelectedItems = this.clearSelectedItems.bind(this);
  }

  setTask(task) {
    let { items } = this.state;
    items.push(task);
    updateTasks(items).then(() => {
      this.setState({
        items,
      });
    });
  }

  changeStatusTasks(indexItems) {
    const { items } = this.state;
    indexItems.forEach(indexItem => {
      items[indexItem].done = !items[indexItem].done;
    })
    updateTasks(items).then(() => {
      this.setState({
        items,
      });
    });
  }

  deleteSelectedItems(indexItemsForDelete) {
    const { items } = this.state;
    const filteredItems = items.filter((item, index) => !indexItemsForDelete.includes(index));
    updateTasks(filteredItems).then(() => {
      this.setState({
        items: filteredItems,
      });
    });
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
      switch(field) {
        case FILTER_FIELDS.done:
        case FILTER_FIELDS.date:
          filteringItems = filteringItems.filter(item => {
            return item[field] === filters[field];
          })
          break;
        case FILTER_FIELDS.search:
          filteringItems = filteringItems.filter(item => {
            const { title, description } = item;
            const searchValue = filters[field].toLowerCase();
            if (title.toLowerCase().indexOf(searchValue) === -1 && description.toLowerCase().indexOf(searchValue) === -1) {
              return false
            }
            return true
          })
          break;
        default: break;
      }
    })
    this.setState({
      filteredItems: filteringItems,
      filters,
    });
  }

  handlerSelectedItems(isChecked, indexItem) {
    const { selectedItems } = this.state;
    if (isChecked) {
      this.setState({
        selectedItems: [...selectedItems, indexItem],
      });
    } else {
      this.setState({
        selectedItems: selectedItems.filter(item => item !== indexItem),
      });
    }
  }

  handlerChangeStatusTasks() {
    this.changeStatusTasks(this.state.selectedItems);
    this.clearSelectedItems();
  }

  handlerDeleteSelectedItems() {
    this.deleteSelectedItems(this.state.selectedItems);
    this.clearSelectedItems();
  }

  clearSelectedItems() {
    this.setState({
      selectedItems: [],
    });
  }

  render() {
    return (
      <div>
        <FormAddTask addTask={ this.setTask } />     
        <hr />    
        <FormFilter
          isShow={ Boolean(this.state.items.length) }
          changeFilter={ this.changeFilter }
        />
        <hr />    
        <TableItems
          items={ this.state.filteredItems || this.state.items }
          selectedItems={ this.state.selectedItems }
          selecteItems={ this.handlerSelectedItems }
        />
        <TableActions
          isShow={ this.state.selectedItems.length !== 0 }
          changeStatusTasks={ this.handlerChangeStatusTasks }
          deleteSelectedItems={ this.handlerDeleteSelectedItems }
          clearSelectedItems={ this.clearSelectedItems }
        />
      </div>
    )
  }
}

export default PageHome;