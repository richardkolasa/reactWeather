import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  //responsible for rendering a single row in the app
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => ((temp - 273.15) * 1.8) + 32);
    const pressures = _.map(cityData.list.map(weather => weather.main.pressure), (pressure) => (0.014503773795536 * pressure));
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td id="td"><Chart data={temps} units="F" color="orange" /></td>
        <td id="td"><Chart data={pressures} units="psi" color="green" /></td>
        <td id="td"><Chart data={humidities} units="%" color="blue" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (psi)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);