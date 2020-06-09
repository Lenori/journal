import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import {FaCalendarAlt, FaSearch} from 'react-icons/fa'

import {Banner, Content, Title, Form, Formsave} from './styles';

import Map from '../../components/Map';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

class Plan extends Component {
    render() {
        return(
            <>  
                <Map />
                <Banner>
                    <Content>
                        <Title>
                            <h1>Plan your <span>trip</span></h1>
                        </Title>

                        <Form>
                            <form>
                            <Autocomplete
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    paddingLeft: '16px',
                                    marginTop: '2px',
                                    marginBottom: '100px'
                                }}
                                onPlaceSelected={ this.onPlaceSelected }
                                types={['(regions)']}
                            />
                                <input type="text" placeholder="Starting" />
                                <section>
                                    <FaCalendarAlt size={25} color={'#333C39'} />
                                    <input type="text" placeholder="Date" />
                                </section>

                                <section>
                                    <FaSearch size={25} color={'#333C39'} />
                                    <input type="text" placeholder="Search" />
                                </section>

                                <section>
                                    <FaCalendarAlt size={25} color={'#333C39'} />
                                    <input type="text" placeholder="Date" />
                                </section>

                                <button>Add leg</button>

                                <input type="text" placeholder="Ending" />
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
                            <form>
                                <input type="text" placeholder="Name of your trip" />
                                <textarea placeholder="Description"></textarea>
                                
                                <button type="submit">Save trip</button>
                            </form>
                        </Formsave>

                    </Content>
                </Banner>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Plan;