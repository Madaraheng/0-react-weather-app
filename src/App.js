import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Wheather from "./components/Wheather";

const API_KEY = "a44c095e9fab5ca59635a75d8c07b260";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  // get the data from the API
  getWheather = async e => {
    // stop the page load when sumbit the form
    e.preventDefault();
    // get the city and country from the user
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    // check the city and the country exist or not
    if (data.cod !== "404") {
      console.log(data);
      // update the state by get the data from the API
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "City and country don't exist"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="col-sm-4 title-container">
                <Title />
              </div>
              <div className="col-sm-8 form-container ">
                <Form getWheather={this.getWheather} />
                <Wheather Wheather={this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
