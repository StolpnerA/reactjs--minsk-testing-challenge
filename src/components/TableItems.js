import React, { Component } from 'react';
import './TableItems.css'
import TableHead from './TableHead';
import TableBody from './TableBody';

class TableItems extends Component {
  render() {
    if (!this.props.items.length) return null;
    return (
      <table className="tableItems">
        <TableHead />
        <TableBody
          items={ this.props.items }
          changeStatusTask={ this.props.changeStatusTask }
        />
      </table>
    )
  }
}

export default TableItems;
