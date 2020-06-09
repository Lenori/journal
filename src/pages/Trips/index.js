import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {FaTimesCircle, FaShareAlt} from 'react-icons/fa'

import {Banner, Content, Title, Items, Trip, Tripinfo, Tripactions} from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Stars from '../../components/Stars';
import Footer from '../../components/Footer';

class Trips extends Component {
    constructor() {
        super();

        this.state = {
            trips: [
                {   
                    id: 1,
                    title: 'Road trip with Lisa and Mike',
                    desc: 'Lorem ipsum dolor sit amet lorem ipsum dol...',
                    review: 4
                }
            ]
        };
    }

    render() {
        return(
            <>
                <Banner>
                    <Content>
                        <Header />

                        <Title>
                            <h1>My <span>trips</span></h1>
                        </Title>

                        <Items>
                            {this.state.trips.map(trip => (
                                <Trip key={trip.id}>
                                    <Tripinfo>
                                        <h1>{trip.title}</h1>
                                        <p>{trip.desc}</p>
                                    </Tripinfo>

                                    <Tripactions>
                                        <Stars review={trip.review} />
                                        <section>
                                            <Link to="/journal"><button>Open journal</button></Link>
                                            <button>Edit trip</button>
                                        </section>
                                        
                                        <section>
                                            <FaShareAlt size={35} color={'#FAF11D'} />
                                            <FaTimesCircle size={35} color={'#FAF11D'} />
                                        </section>
                                    </Tripactions>
                                </Trip>
                            ))}
                        </Items>

                    </Content>
                </Banner>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Trips;