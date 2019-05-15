import React, { Component } from 'react';
import { Checkbox, Input } from 'semantic-ui-react';

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
          <Checkbox
            toggle
            label="Show completed"
            onChange={ (e, value) => this.handlerChange(value.checked, FILTER_FIELDS.done) }
          />
          <Input
              type="date"
              onChange={ (e, { value }) => this.handlerChange(value, FILTER_FIELDS.date) }
            />
        </div>
        <Input
          type="text"
          placeholder="Text search (title + description)"
          onChange={ (e, { value }) => this.handlerChange(value, FILTER_FIELDS.search) }
        />
      </div>
    )
  }
}

export default FormFilter;
