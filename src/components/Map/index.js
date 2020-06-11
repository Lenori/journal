import React, {Component} from 'react';

const google = window.google;

const {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

class Map extends Component {
  constructor() {
    super();

    this.state = {
        directions: []
    };
  }

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = this.props.origin;
    const destination = this.props.destination;
    const legs = this.props.legs;

    const waypoints = [];
    
    legs.map(leg => waypoints.push(leg));

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
      );
  }

    render() {
      const MapComponent = withGoogleMap(props => (
          <GoogleMap
              defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
              defaultZoom={5}
          >

            <DirectionsRenderer
                directions={props.directions}
            />

          </GoogleMap>
      ));
        return(
            <MapComponent
              loadingElement={<div style={{ height: `100%`}} />}
              containerElement={<div style={{ height: `900px`}} />}
              mapElement={<div style={{ height: `100%` }} />}
              directions={this.state.directions}
            />
        )
    }
}

export default Map;