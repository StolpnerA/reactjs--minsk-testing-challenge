import React, { Component } from 'react';
import './TableBody.css';

class TableBody extends Component {
  constructor(props) {
    super(props);
    
    this.handlerChangeDone = this.handlerChangeDone.bind(this);
  }

  handlerChangeDone(e, indexItem) {
    this.props.changeStatusTask(e.target.checked, indexItem);
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
          className={ isToday ? 'tableBody__today' : null }
        >
          <td>{ index }</td>
          <td>
            <input
              type="checkbox"
              checked={ item.done }
              onChange={ (e) => this.handlerChangeDone(e, index) }
            />
          </td>
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