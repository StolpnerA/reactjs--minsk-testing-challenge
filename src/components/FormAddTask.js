import React, { Component } from 'react';
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

  handlerChange(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }

  handlerClick() {
    this.props.addTask(this.state);
    this.setState(Object.assign({}, initState));
  }

  render() {
    const priorityOptions = PRIORITY_OPTIONS.map(option => {
      return (
        <option
          key={ option }
          value={ option }>
          { option }
        </option>
      )
    })
    return (
      <div className="formAddTask">
        <div className="formAddTask__mainData">
          <div>
            <input
              type="text"
              value={ this.state.title }
              placeholder="Title"
              onChange={ (e) => this.handlerChange(e, 'title') }
            />
          </div>
          <div>
            <select
              value={ this.state.priority }              
              onChange={ (e) => this.handlerChange(e, 'priority') }>
              { priorityOptions }
            </select>
          </div>
          <div>
            <input
              type="date"
              value={ this.state.date }
              onChange={ (e) => this.handlerChange(e, 'date') }
            />
          </div>
        </div>
        <textarea
          placeholder="Desctiption"
          value={ this.state.description }
          onChange={ (e) => this.handlerChange(e, 'description') }
        />
        <input
          type="submit"
          value="Add"
          onClick={ this.handlerClick }
        />
      </div>
    )
  }
}

export default FormAddTask;