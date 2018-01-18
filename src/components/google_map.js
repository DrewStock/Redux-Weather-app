import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon // Google maps longitude property is lng, OpenWeatherMap longitude is lon
            }
        });
    }

    render() {
        return <div className="GoogleMap" ref="map" />;
    }
}

export default GoogleMap;