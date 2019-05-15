import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class TableActions extends Component {
  render() {
    if (!this.props.isShow) return null;
    return (
      <div>
        <Button onClick={ this.props.changeStatusTasks }>Change Status Tasks</Button>
        <Button onClick={ this.props.deleteSelectedItems }>Delete</Button>
        <Button onClick={ this.props.clearSelectedItems }>Clear Selected</Button>
      </div>
    )
  }
}

export default TableActions;