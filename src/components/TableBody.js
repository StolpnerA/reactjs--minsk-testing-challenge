import React, { Component } from 'react';
import './TableBody.css';
import { classList } from '../helpers/utils';

class TableBody extends Component {
  constructor(props) {
    super(props);
    
    this.handlerChangeChecked = this.handlerChangeChecked.bind(this);
  }

  handlerChangeChecked(e, indexItem) {
    this.props.changeSelectedItems(e.target.checked, indexItem);
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
        <tr
          key={index}
          className={classList({
            'tableBody__today': isToday,
            'tableBody__done': item.done,
          })}
        >
          <td>
            <input
              type="checkbox"
              checked={ this.props.selectedItems.includes(index) }
              onChange={ (e) => this.handlerChangeChecked(e, index) }
            />
          </td>
          <td>{ index }</td>
          <td>{ item.title }</td>
          <td>{ item.priority }</td>
          <td>{ item.date }</td>
        </tr>
      );
    })
    return (
      <tbody>
        { rows }
      </tbody>
    )
  }
}

export default TableBody;