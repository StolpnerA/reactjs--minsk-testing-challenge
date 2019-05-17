import React, { Component } from 'react';
import { Checkbox, Input } from 'semantic-ui-react';

import './FormFilter.css'

import { FILTER_FIELDS, MIN_SEARCH_CHARS } from '../helpers/constants';

class FormFilter extends Component {
  constructor(props) {
    super(props);
    
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerChangeSearch = this.handlerChangeSearch.bind(this);
  }

  handlerChange(value, field) {
    if (!value) {
      value = null;
    }
    this.props.changeFilter(value, field);
  }

  handlerChangeSearch(value) {
    if (value.length === 0 || value.length >= MIN_SEARCH_CHARS) {
      this.handlerChange(value, FILTER_FIELDS.search);
    }
  }

  render() {
    if (!this.props.isShow) return null;

    return (
      <div className="formFilter">
        <div className="formFilter__block">
          <Checkbox
            toggle
            label="Show completed"
            onChange={ (e, value) => this.handlerChange(value.checked, FILTER_FIELDS.done) }
          />
          <Input
            className="formFilter__inputDate"
            type="date"
            onChange={ (e, { value }) => this.handlerChange(value, FILTER_FIELDS.date) }
          />
        </div>
        <Input
          className="formFilter__inputSearch"
          type="text"
          placeholder="Text search (title + description)"
          onChange={ (e, { value }) => this.handlerChangeSearch(value) }
        />
      </div>
    )
  }
}

export default FormFilter;
