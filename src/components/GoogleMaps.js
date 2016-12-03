import _ from 'lodash'
import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export class GoogleMaps extends Component {
  render() {
    return (
      <section style={{ height: "100%" }}>
        <GoogleMapLoader
          containerElement={ <div style={{ height: "100%", }} /> }
          googleMapElement={
            <GoogleMap
              defaultZoom={12}
              defaultCenter={{ lat: this.props.lat, lng: this.props.lon }}
            >
            </GoogleMap>
          }
        />
      </section>
    );
  }
}
export default GoogleMaps