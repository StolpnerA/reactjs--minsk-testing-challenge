import React, { Component } from 'react';
import { Checkbox, Table } from 'semantic-ui-react';

import './TableBody.css';

import { classList } from '../helpers/utils';

class TableBody extends Component {
  constructor(props) {
    super(props);
    
    this.handlerChangeChecked = this.handlerChangeChecked.bind(this);
  }

  handlerChangeChecked(value, indexItem) {
    this.props.changeSelectedItems(value, indexItem);
  }

  getToday() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  render() {
    const rows = this.props.items.map((item, index) => {
      const isToday = item.date === this.getToday();
      return (
        <Table.Row
          key={index}
          warning={ isToday }
          className={classList({
            'tableBody__done': item.done,
          })}
        >
          <Table.Cell collapsing>
            <Checkbox
              slider
              checked={ this.props.selectedItems.includes(index) }
              onChange={ (e, value) => this.handlerChangeChecked(value.checked, index) }
            />
          </Table.Cell>
          <Table.Cell>{ index }</Table.Cell>
          <Table.Cell>{ item.title }</Table.Cell>
          <Table.Cell>{ item.priority }</Table.Cell>
          <Table.Cell>{ item.date }</Table.Cell>
        </Table.Row>
      );
    })
    return (
      <Table.Body>
        { rows }
      </Table.Body>
    )
  }
}

export default TableBody;