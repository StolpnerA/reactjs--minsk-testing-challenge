import React, { Component } from 'react';
import './FormFilter.css'

class FormFilter extends Component {
  constructor(props) {
    super(props);
    
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange(value, field) {
    if (!value) {
      value = null;
    }
    this.props.changeFilter(value, field);
  }

  render() {
    if (!this.props.isShow) return null;

    return (
      <div className="formFilter">
        <div>
          <input
            type="checkbox"
            onChange={ (e) => this.handlerChange(e.target.checked, 'done') }/> Show completed
          <input
            type="date"
            onChange={ (e) => this.handlerChange(e.target.value, 'date') }
          />
        </div>
        <input
          type="text"
          placeholder="Text search (title + description)"/>
      </div>
    )
  }
}

export default FormFilter;
