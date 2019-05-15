import React, { Component } from 'react';
import './TableItems.css'
import TableHead from './TableHead';
import TableBody from './TableBody';

class TableItems extends Component {
  constructor(props) {
    super(props);

    this.handlerSelectedItems = this.handlerSelectedItems.bind(this);
  }

  handlerSelectedItems(isChecked, indexItem) {
    this.props.selecteItems(isChecked, indexItem);
  }

  render() {
    if (!this.props.items.length) return null;
    return (
      <table className="tableItems">
        <TableHead />
        <TableBody
          items={ this.props.items }
          selectedItems={ this.props.selectedItems }
          changeSelectedItems={ this.handlerSelectedItems }
        />
      </table>
    )
  }
}

export default TableItems;
