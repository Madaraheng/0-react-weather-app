import React, { Component } from "react";

class Wheather extends Component {
  render() {
    const {
      city,
      error,
      country,
      humidity,
      description,
      temperature
    } = this.props.Wheather;

    return (
      <div>
        {city &&
          country && (
            <p className="weather__key">
              Location:{" "}
              <span className="weather__value">
                {" "}
                {city}, {country}
              </span>
            </p>
          )}
        {temperature && (
          <p className="weather__key">
            Temperature: <span className="weather__value"> {temperature}</span>
          </p>
        )}
        {humidity && (
          <p className="weather__key">
            Humidity: <span className="weather__value"> {humidity}</span>
          </p>
        )}
        {description && (
          <p className="weather__key">
            Description: <span className="weather__value"> {description}</span>
          </p>
        )}
        {error && <p className="weather__key"> {error}</p>}
      </div>
    );
  }
}

export default Wheather;
