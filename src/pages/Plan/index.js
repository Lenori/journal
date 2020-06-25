import React, {Component} from 'react';
import Select from 'react-select'
import {FaCalendarAlt, FaSearch, FaTimesCircle, FaFacebook, FaTwitter, FaCopy} from 'react-icons/fa'

import {Banner, Content, Title, Form, Formsave, Share, Leg} from './styles';
import selectStyles from '../../styles/selectInputStyles';

import Map from '../../components/Map';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

class Plan extends Component {
    constructor(props) {
        super(props);

        const params = new URLSearchParams(props.location.search); 
        const starting = params.get('starting');
        const destination = params.get('destination');

        this.state = {
            trip_id: null,
            trip: {
                name: '',
                description: '',
                starting: starting ? starting : '',
                startingDate: '',
                destination: destination ? destination : '',
                destinationDate: '',
                legs: []             
            },
            options: [
                { value: 'Park 1', label: 'Park 1' },
                { value: 'Park 2', label: 'Park 2' },
                { value: 'Park 3', label: 'Park 3' }
            ]
        };

        this.updateTrip = this.updateTrip.bind(this);
        this.addLeg = this.addLeg.bind(this);
        this.updateLeg = this.updateLeg.bind(this);
        this.removeLeg = this.removeLeg.bind(this);
        this.saveTrip = this.saveTrip.bind(this);
    }

    updateTrip(field, value) {
        const legs = this.state.trip.legs;
        const newTrip = {
            name: field == 'name' ? value : this.state.trip.name,
            description: field == 'description' ? value : this.state.trip.description,
            starting: field == 'starting' ? value : this.state.trip.starting,
            startingDate: field == 'startingDate' ? value : this.state.trip.startingDate,
            destination: field == 'destination' ? value : this.state.trip.destination,
            destinationDate: field == 'destinationDate' ? value : this.state.trip.destinationDate,
            legs: legs
        }

        this.setState({trip: newTrip});
    }

    addLeg(e) {
        e.preventDefault();

        const legs = this.state.trip.legs;
        legs.push({
            place: '',
            date: ''
        });

        const newTrip = {
            name: this.state.trip.name,
            description: this.state.trip.description,
            starting: this.state.trip.starting,
            startingDate: this.state.trip.startingDate,
            destination: this.state.trip.destination,
            destinationDate: this.state.trip.destinationDate,
            legs: legs
        }

        this.setState({trip: newTrip})
    }

    updateLeg(field, value, index) {
        let legs = this.state.trip.legs;

        legs[index].place = field == 'place' ? value : legs[index].place;
        legs[index].date = field == 'date' ? value : legs[index].date;

        const newTrip = {
            name: this.state.trip.name,
            description: this.state.trip.description,
            starting: this.state.trip.starting,
            startingDate: this.state.trip.startingDate,
            destination: this.state.trip.destination,
            destinationDate: this.state.trip.destinationDate,
            legs: legs
        }

        this.setState({trip: newTrip})
    }

    removeLeg(e, index) {
        e.preventDefault();

        const legs = this.state.trip.legs;
        legs.splice(index, 1);

        const newTrip = {
            name: this.state.trip.name,
            description: this.state.trip.description,
            starting: this.state.trip.starting,
            startingDate: this.state.trip.startingDate,
            destination: this.state.trip.destination,
            destinationDate: this.state.trip.destinationDate,
            legs: legs
        }

        this.setState({trip: newTrip})
    }

    saveTrip(e) {
        e.preventDefault();

        //Save trip on database and return ID

        this.setState({trip_id: 1}) // place ID on trip_id
    }

    render() {
        return(
            <>  
                <Map origin={this.state.trip.starting} destination={this.state.trip.destination} legs={this.state.trip.legs} />
                <Banner>
                    {this.state.trip_id == null ? (
                        <Content>
                        <Title>
                            <h1>Plan your <span>trip</span></h1>
                        </Title>

                        <Form>
                            <form>
                                <section>
                                    <Select
                                        options={this.state.options}
                                        styles={selectStyles}
                                        onChange={e => this.updateTrip('starting', e.value)}
                                        className='select-input'
                                        placeholder='Starting'
                                    />
                                </section>
                            
                                <section>
                                    <FaCalendarAlt size={25} color={'#333C39'} />
                                    <input type="text" placeholder="Date" />
                                </section>

                                {this.state.trip.legs.map((leg, index) => (
                                    <>
                                        <Leg>
                                            <Select
                                                options={this.state.options}
                                                styles={selectStyles}
                                                onChange={e => this.updateLeg('starting', e.value, index)}
                                                className='select-input'
                                                placeholder='Starting'
                                            />
                                        </Leg>

                                        <Leg half>
                                            <FaCalendarAlt size={25} color={'#333C39'} />
                                            <input
                                                type="text"
                                                placeholder="Date"
                                                value={leg.date}
                                                onChange={e => this.updateLeg(null, e.target.value, index)}
                                            />
                                        </Leg>
                                        <Leg half>

                                            <FaCalendarAlt size={25} color={'#333C39'} />
                                            <input
                                                type="text"
                                                placeholder="Date"
                                                value={leg.date}
                                                onChange={e => this.updateLeg(null, e.target.value, index)}
                                            />
                                            {leg.place && leg.date ? (<FaTimesCircle size={30} color={'#FAF11D'} onClick={e => this.removeLeg(e, index)} />) : ''}                                            
                                        </Leg>
                                    </>
                                ))}

                                <button onClick={e => this.addLeg(e)}>Add leg</button>

                                <section>
                                    <Select
                                        options={this.state.options}
                                        styles={selectStyles}
                                        onChange={e => this.updateTrip('destination', e.value)}
                                        className='select-input'
                                        placeholder='Destination'
                                    />
                                </section>

                                <section>
                                    <FaCalendarAlt size={25} color={'#333C39'} />
                                    <input type="text" placeholder="Date" />
                                </section>
                            </form>
                        </Form>

                        <Title>
                            <h1>Save your <span>trip</span></h1>
                        </Title>

                        <Formsave>
                            <form onSubmit={this.saveTrip}>
                                <input
                                    type="text"
                                    value={this.state.trip.name}
                                    onChange={e => this.updateTrip(null, null, null, null, e.target.value, null)}
                                    placeholder="Name of your trip"
                                />

                                <textarea
                                    value={this.state.trip.description}
                                    onChange={e => this.updateTrip(null, null, null, null, null, e.target.value)}
                                    placeholder="Description">                                    
                                </textarea>
                                
                                <button type="submit">Save trip</button>
                            </form>
                        </Formsave>

                    </Content>
                    ) : (
                        <Share>
                            <h1>Share your <span>trip</span></h1>

                            <section>
                                <FaFacebook size={35} color={'#FFFFFF'} />
                                <FaTwitter size={35} color={'#FFFFFF'} />
                                <FaCopy size={35} color={'#FFFFFF'} />
                            </section>
                        </Share>
                    )}
                </Banner>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Plan;