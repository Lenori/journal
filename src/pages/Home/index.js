import React, {Component} from 'react';
import {Banner, Content, Title, Form} from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

import InputAutosuggest from '../../components/Autosuggest';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            trip: {
                starting: '',
                destination: ''
            },
            suggestions: []
        };

        this.updateTrip = this.updateTrip.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTrip(field, value) {
        const newTrip = {
            starting: field == 'starting' ? value : this.state.trip.starting,
            destination: field == 'destination' ? value : this.state.trip.destination
        }

        this.setState({trip: newTrip});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push(`/plan?starting=${this.state.trip.starting}&destination=${this.state.trip.destination}`);
    }

    render() {
        return(
            <>
                <Banner>
                    <Content>
                        <Header />

                        <Title>
                            <h1>Your trip <span>planned</span> like you always <span>dreamed!</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque feugiat nisi, ac faucibu.</p>
                        </Title>

                        <Form>
                            <form onSubmit={this.handleSubmit}>
                                <InputAutosuggest
                                    id="starting"
                                    placeholder="Starting"
                                    onChange={this.updateTrip}
                                />

                                <InputAutosuggest
                                    id="destination"
                                    placeholder="Destination"
                                    onChange={this.updateTrip}
                                />                                
                                <button type="submit">Plan trip!</button>
                            </form>
                        </Form>

                    </Content>
                </Banner>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Home;