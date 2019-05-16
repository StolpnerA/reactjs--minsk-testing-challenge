import React, { Component } from 'react';
import { Input, Select, TextArea, Button } from 'semantic-ui-react';

import './FormAddTask.css'

import { PRIORITY_OPTIONS } from '../helpers/constants.js';

const initState = {
  title: '',
  description: '',
  date: '2019-05-06',
  priority: '',
  done: false,
};

class FormAddTask extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initState);

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerChange(value, name) {
    this.setState({
      [name]: value,
    });
  }

  handlerClick() {
    this.props.addTask(this.state);
    this.setState(Object.assign({}, initState));
  }

  render() {
    const priorityOptions = PRIORITY_OPTIONS.map(option => {
      return (
        {
          key: option,
          text: option,
          value: option,
        }
      )
    })
    return (
      <div className="formAddTask">
        <div className="formAddTask__mainData">
          <Input
            type="text"
            value={ this.state.title }
            placeholder="Title"
            onChange={ (e, { value }) => this.handlerChange(value, 'title') }
          />
          <Select
            options={priorityOptions}
            value={ this.state.priority }
            placeholder='Select priority'
            onChange={ (e, { value }) => this.handlerChange(value, 'priority') }
          />
          <Input
            type="date"
            value={ this.state.date }
            onChange={ (e, { value }) => this.handlerChange(value, 'date') }
          />
        </div>
        <TextArea
          className="formAddTask__textarea"
          placeholder="Desctiption"
          value={ this.state.description }
          onChange={ (e, { value }) => this.handlerChange(value, 'description') }
        />
        <Button
          className="formAddTask__btn"
          onClick={ this.handlerClick }
        >
          Add
        </Button>
      </div>
    )
  }
}

export default FormAddTask;