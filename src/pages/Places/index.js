import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Banner, Content, Title, Form} from './styles';

import Select from 'react-select'
import selectStyles from '../../styles/selectInputStyles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

import Results from './Results';

class Places extends Component {
    constructor() {
        super();

        this.state = {
            place: null,
            userLat: null,
            userLon: null,
            places: [],
            options: [
                    { value: 'Park 1', label: 'Park 1' },
                    { value: 'Park 2', label: 'Park 2' },
                    { value: 'Park 3', label: 'Park 3' }
                ]
        };

        this.places = this.places.bind(this);
        this.updatePlaces = this.updatePlaces.bind(this);
        this.userLocation = this.userLocation.bind(this);
    }

    places() {
        const places = [
            {title: 'Place 01', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 02', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 03', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 04', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 05', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 06', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'}
        ];

        this.setState({places: places});
    }

    updatePlaces(value) {
        const places = [
            {title: 'Place 01', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 02', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 03', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 04', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 05', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'},
            {title: 'Place 06', description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet', hours: '09h00 - 18h00'}
        ];

        this.setState({
            place: value,
            places: places
        });
    }

    userLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                userLat: position.coords.latitude,
                userLon: position.coords.longitude
            });
        });
    }
    componentDidMount() {        
        this.userLocation();
        this.places();
    }

    render() {
        return(
            <>
                <Banner>
                    <Content>
                        <Header />

                        <Title>
                            <h1>Places near <span>{this.state.place ? this.state.place.label : 'me'}</span></h1>
                        </Title>

                        <p>or search for places near a <span>new location:</span></p>

                        <Form>
                            <form>
                                <Select
                                    options={this.state.options}
                                    styles={selectStyles}
                                    onChange={e => this.updatePlaces(e)}
                                    className='select-input'
                                    placeholder='New place'
                                />
                            </form>
                        </Form>

                    </Content>
                </Banner>

                <Results places={this.state.places} />

                <Services />
                <Footer />
            </>
        )
    }
}

export default Places;