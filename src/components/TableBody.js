import React, { Component } from 'react';

class TableBody extends Component {
  constructor(props) {
    super(props);
    
    this.handlerChangeDone = this.handlerChangeDone.bind(this);
  }

  handlerChangeDone(e, indexItem) {
    this.props.changeStatusTask(e.target.checked, indexItem);
  }

  render() {
    const rows = this.props.items.map((item, index) => {
      return (
        <tr key={index}>
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