import React, { Component } from 'react';

class PageInQA extends Component {
  componentDidMount() {
    document.title = "inQA";
  }

  render() {
    return (
      <div>
        <a
          href="https://inqa.by/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site
        </a><br/>
        <a
          href="https://www.instagram.com/inqa.by/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a><br/>
        <a
          href="https://t.me/inqaby"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a><br/>
      </div>
    )
  }
}

export default PageInQA;