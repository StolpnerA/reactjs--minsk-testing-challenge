import React, { Component } from 'react';

class PageAbout extends Component {
  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <div>
        A list of errands and other tasks – often written on a piece of paper as a memory aid – that one needs or intends to accomplish.
      </div>
    )
  }
}

export default PageAbout