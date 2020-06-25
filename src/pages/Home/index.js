import React, {Component} from 'react';
import Select from 'react-select'

import {Banner, Content, Title, Form} from './styles';
import selectStyles from '../../styles/selectInputStyles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            trip: {
                starting: '',
                destination: ''
            },
            options: [
                    { value: 'Park 1', label: 'Park 1' },
                    { value: 'Park 2', label: 'Park 2' },
                    { value: 'Park 3', label: 'Park 3' }
                ]
        };

        this.updateTrip = this.updateTrip.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTrip(field, value) {
        const newTrip = {
            starting: field == 'starting' ? value.value : this.state.trip.starting,
            destination: field == 'destination' ? value.value : this.state.trip.destination
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
                                <Select
                                    options={this.state.options}
                                    styles={selectStyles}
                                    onChange={e => this.updateTrip('starting', e)}
                                    className='select-input'
                                    placeholder='Starting'
                                />

                                <Select
                                    options={this.state.options}
                                    styles={selectStyles}
                                    onChange={e => this.updateTrip('destination', e)}
                                    className='select-input'
                                    placeholder='Destination'
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