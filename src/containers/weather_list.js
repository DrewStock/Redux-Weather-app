import React, { Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash';

class WeatherList extends Component {
    renderWeather(cityData) {
        console.log('city data', cityData);
        const cityName = cityData.city.name;

        // with formula to convert Kelvin to Fahrenheit
        const temps = cityData.list.map(weather => 9/5 * (weather.main.temp - 273.15) + 32);
        // const temps = cityData.list.map(weather => weather.main.temp * 9/5 - 459.67);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humiditities = cityData.list.map(weather => weather.main.humidity);
        
        // ES5 - variables for Google Maps
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        // or, equivalent with ES6 destructuring
        const { lon, lat }  = cityData.city.coord;
        
        console.log(temps);
        // console.log(pressures);
        // console.log(humiditities);
        
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="orange" units="°F" />
                </td>
                <td>
                    <Chart data={pressures} color="red" units="hPa" />
                </td>
                <td>
                    <Chart data={humiditities} color="blue" units="%" />
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
                        <th>Map</th>
                        <th>Temperature (°F)</th>
                        <th>Pressure (hPa)</th>
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

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }

// OR
function mapStateToProps({ weather }) { // equivalent to: const weather = state.weather;
    return { weather } // { weather } === { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);