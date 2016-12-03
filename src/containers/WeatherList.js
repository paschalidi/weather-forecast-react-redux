import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Chart } from '../components/Chart'
import { GoogleMaps } from '../components/GoogleMaps'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMaps lat={lat} lon={lon} city={name}/></td>
        <td><Chart data={temps} units="K" color={"blue"} /></td>
        <td><Chart data={pressures} units="hPa" color={"green"} /></td>
        <td><Chart data={humidities} units="%" color={"black"} /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapToStateProps(state) {
  return { weather: state.weather };
}

export default connect(mapToStateProps)(WeatherList)
