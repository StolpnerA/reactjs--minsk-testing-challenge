import React, { Component } from 'react';

class TableActions extends Component {
  render() {
    if (!this.props.isShow) return null;
    return (
      <div>
        <button
          onClick={ this.props.changeStatusTasks }>
          Change Status Tasks
        </button>
        <button
          onClick={ this.props.deleteSelectedItems }>
          Delete
        </button>
        <button
          onClick={ this.props.clearSelectedItems }>
          Clear Selected
        </button>
      </div>
    )
  }
}

export default TableActions;