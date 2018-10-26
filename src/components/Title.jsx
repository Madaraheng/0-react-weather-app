import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <div className="container">
          <p className="title-container__subtitle">
            Find out temperature, condition and more
          </p>
        </div>
      </div>
    );
  }
}

export default Title;
