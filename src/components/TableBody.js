import React, { Component } from 'react';

class TableBody extends Component {
  render() {
    const rows = this.props.items.map((item, index) => {
      return (
        <tr key={index}>
          <td>{ index }</td>
          <td>done</td>
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