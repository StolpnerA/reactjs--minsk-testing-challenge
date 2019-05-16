import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import'./TableHead.css';

import { COLUMNS } from '../helpers/constants';

class TableHead extends Component {
  render() {
    const columns = COLUMNS.map(col => {
      return (
        <Table.HeaderCell key={ col }>{ col }</Table.HeaderCell>
      )
    })

    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          { columns }
        </Table.Row>
      </Table.Header>
    )
  }
}

export default TableHead;