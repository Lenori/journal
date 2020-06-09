import React, {Component} from 'react';
import {GoogleMap, withGoogleMap} from "react-google-maps"

const MapComponent = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 40.38398, lng: -101.5800 }}
  >
  </GoogleMap>
)

class Map extends Component {
    render() {
        return(
            <MapComponent
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `900px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}

export default Map;