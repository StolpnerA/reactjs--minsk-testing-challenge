import React, { Component } from 'react';

class PageAbout extends Component {
  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <div>About Page</div>
    )
  }
}

export default PageAbout