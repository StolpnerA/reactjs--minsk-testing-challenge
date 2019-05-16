import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import './TableActions.css'

class TableActions extends Component {
  render() {
    if (!this.props.isShow) return null;
    return (
      <div className="tableActions">
        <Button
          basic
          color="green"
          onClick={ this.props.changeStatusTasks }
        >
          Change Status Tasks
        </Button>
        <Button
          basic
          color="red"
          onClick={ this.props.deleteSelectedItems }
        >
          Delete
        </Button>
        <Button
          basic
          onClick={ this.props.clearSelectedItems }
        >
          Clear Selected
        </Button>
      </div>
    )
  }
}

export default TableActions;