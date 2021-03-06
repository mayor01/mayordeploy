import React, { Component } from "react";

import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";
import Scroll from "../components/Scroll";

export default class App extends Component {
  render() {
    return (
      <div>
        <h3 className="niger">NIGERIA CITIES WEATHER FORECAST</h3>
        <SearchBar />
        <Scroll>
          <WeatherList />
        </Scroll>
      </div>
    );
  }
}
