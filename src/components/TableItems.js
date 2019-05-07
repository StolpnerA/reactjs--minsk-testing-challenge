import React, { Component } from 'react';
import './TableItems.css'
import TableHead from './TableHead';
import TableBody from './TableBody';

class TableItems extends Component {
  render() {
    return (
      <table className="tableItems">
        <TableHead />
        <TableBody items={this.props.items} />
      </table>
    )
  }
}

export default TableItems;
