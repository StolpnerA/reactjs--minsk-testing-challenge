import React, { Component } from 'react';
import './TableItems.css'
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableActions from './TableActions';

class TableItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };

    this.handlerSelectedItems = this.handlerSelectedItems.bind(this);
    this.handlerChangeStatusTasks = this.handlerChangeStatusTasks.bind(this);
    this.handlerDeleteSelectedItems = this.handlerDeleteSelectedItems.bind(this);
    this.clearSelectedItems = this.clearSelectedItems.bind(this);
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
    this.props.changeStatusTasks(this.state.selectedItems);
    this.clearSelectedItems();
  }

  handlerDeleteSelectedItems() {
    this.props.deleteSelectedItems(this.state.selectedItems);
    this.clearSelectedItems();
  }

  clearSelectedItems() {
    this.setState({
      selectedItems: [],
    });
  }

  render() {
    if (!this.props.items.length) return null;
    return (
      <div>
        <table className="tableItems">
          <TableHead />
          <TableBody
            items={ this.props.items }
            selectedItems={ this.state.selectedItems }
            changeSelectedItems={ this.handlerSelectedItems }
          />
        </table>
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

export default TableItems;
