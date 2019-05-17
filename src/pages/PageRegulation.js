import React, { Component } from 'react';

class PageRegulation extends Component {
  componentDidMount() {
    document.title = "inQA";
  }

  render() {
    return (
      <div>
        Page Regulation
      </div>
    )
  }
}

export default PageRegulation;