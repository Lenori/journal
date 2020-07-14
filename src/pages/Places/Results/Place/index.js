import React, {Component} from 'react';
import Loader from 'react-loader-spinner'

import {Content, Location, Info} from './styles';

class Place extends Component {
    render() {
        return(
            <Content>
                <Location>
                    <Loader
                        type="Puff"
                        color="#333C39"
                        height={100}
                        width={100}          
                    />
                    <iframe
                        title="google-maps"
                        src={`http://maps.google.com/maps?q=${this.props.place.title}&output=embed`}
                        width="100%"
                        height="500"
                        frameBorder="0"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0">
                    </iframe>
                </Location>
                <Info>
                    <h2>{this.props.place.title}</h2>
                    <p>{this.props.place.description}</p>
                    <span>{this.props.place.hours}</span>

                    <button onClick={() => {this.props.goBack()}}>Go back</button>
                </Info>
            </Content>
        )
    }
}

export default Place;