import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/googlemap";

class WeatherList extends Component {
  renderWeatherItem(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord
    

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" unit="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" unit="hpa" />
        </td>
        <td>
          <Chart data={humidities} color="black" unit="%" />
        </td>
      </tr>
    );
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hpa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeatherItem)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
