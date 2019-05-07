import React, { Component } from 'react';
import'./TableHead.css';
import { COLUMNS } from '../helpers/constants';

class TableHead extends Component {
  render() {
    const columns = COLUMNS.map(col => {
      return (
        <th key={ col }>{ col }</th>
      )
    })

    return (
      <thead className="tableHead">
        <tr>
          { columns }
        </tr>
      </thead>
    )
  }
}

export default TableHead;