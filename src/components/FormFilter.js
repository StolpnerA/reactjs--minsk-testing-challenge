import React, { Component } from 'react';
import './FormFilter.css'
import { FILTER_FIELDS } from '../helpers/constants';

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
            onChange={ (e) => this.handlerChange(e.target.checked, FILTER_FIELDS.done) }/> Show completed
          <input
            type="date"
            onChange={ (e) => this.handlerChange(e.target.value, FILTER_FIELDS.date) }
          />
        </div>
        <input
          type="text"
          placeholder="Text search (title + description)"
          onChange={ (e) => this.handlerChange(e.target.value, FILTER_FIELDS.search) }
        />
      </div>
    )
  }
}

export default FormFilter;
