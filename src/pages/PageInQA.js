import React, { Component } from 'react';

class PageInQA extends Component {
  componentDidMount() {
    document.title = "inQA";
  }

  render() {
    return (
      <div>
        Site: https://inqa.by/
        Instagram: https://www.instagram.com/inqa.by/
        Telegram: https://t.me/inqaby
      </div>
    )
  }
}

export default PageInQA;