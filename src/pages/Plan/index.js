import React, {Component} from 'react';
import {FaCalendarAlt, FaSearch, FaTimesCircle, FaFacebook, FaTwitter, FaCopy} from 'react-icons/fa'

import {Banner, Content, Title, Form, Formsave, Share} from './styles';

import Map from '../../components/Map';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

import InputAutosuggest from '../../components/Autosuggest';

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
            }
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

        console.log(field);
        console.log(value);
        console.log(index);

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
                                    <FaSearch size={25} color={'#333C39'} />
                                    <InputAutosuggest
                                        id="starting"
                                        value={this.state.trip.starting}
                                        placeholder="Starting"
                                        onChange={this.updateTrip}
                                    />
                                </section>
                            
                                <section>
                                    <FaCalendarAlt size={25} color={'#333C39'} />
                                    <input type="text" placeholder="Date" />
                                </section>

                                {this.state.trip.legs.map((leg, index) => (
                                    <>
                                        <section>
                                            <FaSearch size={25} color={'#333C39'} />
                                            <InputAutosuggest
                                                id="place"
                                                index={index}
                                                placeholder="Search"
                                                onChange={this.updateLeg}
                                            />
                                        </section>

                                        <section>
                                            <FaCalendarAlt size={25} color={'#333C39'} />
                                            <input
                                                type="text"
                                                placeholder="Date"
                                                value={leg.date}
                                                onChange={e => this.updateLeg(null, e.target.value, index)}
                                            />
                                            {leg.place && leg.date ? (<FaTimesCircle size={30} color={'#FAF11D'} onClick={e => this.removeLeg(e, index)} />) : ''}                                            
                                        </section>
                                    </>
                                ))}

                                <button onClick={e => this.addLeg(e)}>Add leg</button>

                                <section>
                                    <FaSearch size={25} color={'#333C39'} />
                                    <InputAutosuggest
                                        id="destination"
                                        value={this.state.trip.destination}
                                        placeholder="Destination"
                                        onChange={this.updateTrip}
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