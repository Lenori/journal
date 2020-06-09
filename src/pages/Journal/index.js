import React, {Component} from 'react';

import {FaCalendarAlt, FaFacebook, FaTwitter, FaCopy} from 'react-icons/fa'

import {Banner, Content, Title, Items, Leg, Leginfo, Legactions, Entry, Entryinfo, Entrytext, Share} from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Stars from '../../components/Stars';
import Footer from '../../components/Footer';

class Journal extends Component {
    constructor() {
        super();

        this.state = {
            trip: {  
                id: 1,
                title: 'Road trip with Lisa and Mike',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales maximus diam, ut interdum lacus eleifend eu.',
                author: 'John Doe',
                legs: [
                    {
                        id: 1,
                        place: 'Los Angeles, CA, USA',
                        desc: 'Trip start',
                        date: 'Jun 22, 2020',
                        review: 4,
                        entries: [
                            {
                                id: 1,
                                title: 'I’ll miss LA for a while...',
                                date: 'Jun 23, 2020',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales maximus diam, ut interdum lacus eleifend eu. Sed neque ligula, facilisis eget malesuada non, pulvinar eu urna. Quisque tincidunt enim nunc, vel laoreet nisl porta et. Sed nec lectus ut mauris iaculis elementum. Phasellus dignissim mollis rhoncus. Duis hendrerit est vel consectetur finibus. Praesent a consequat lorem. Sed lobortis semper gravida. Pellentesque placerat nunc at malesuada semper. Sed pretium mi id ornare molestie. Praesent iaculis, purus eget ullamcorper efficitur!'
                            }
                        ]
                    },
                    {
                        id: 2,
                        place: 'The Grand Canyon National Park, AZ, USA',
                        desc: 'Trip leg',
                        date: 'Jun 28, 2020',
                        review: 5,
                        entries: [
                            {
                                id: 1,
                                title: 'Why is Arizona so hot?',
                                date: 'Jun 27, 2020',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales maximus diam, ut interdum lacus eleifend eu. Sed neque ligula, facilisis eget malesuada non, pulvinar eu urna. Quisque tincidunt enim nunc, vel laoreet nisl porta et. Sed nec lectus ut mauris iaculis elementum. Phasellus dignissim mollis rhoncus. Duis hendrerit est vel consectetur finibus. Praesent a consequat lorem. Sed lobortis semper gravida. Pellentesque placerat nunc at malesuada semper. Sed pretium mi id ornare molestie. Praesent iaculis, purus eget ullamcorper efficitur!'
                            },
                            {
                                id: 2,
                                title: 'Grand Canyon is awesome!',
                                date: 'Jun 28, 2020',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales maximus diam, ut interdum lacus eleifend eu. Sed neque ligula, facilisis eget malesuada non, pulvinar eu urna. Quisque tincidunt enim nunc, vel laoreet nisl porta et. Sed nec lectus ut mauris iaculis elementum. Phasellus dignissim mollis rhoncus. Duis hendrerit est vel consectetur finibus. Praesent a consequat lorem. Sed lobortis semper gravida. Pellentesque placerat nunc at malesuada semper. Sed pretium mi id ornare molestie. Praesent iaculis, purus eget ullamcorper efficitur!'
                            }
                        ]
                    }
                ]
            }
        };
    }

    render() {
        return(
            <>
                <Banner>
                    <Content>
                        <Header />

                        <Title>
                            <h1>{this.state.trip.title}</h1>
                            <p>{this.state.trip.desc}</p>
                        </Title>

                        <Title>
                            <h1><span>Journal</span></h1>
                            <p>by <span>{this.state.trip.author}</span></p>
                        </Title>
                    </Content>
                </Banner>

                <Items>
                    {this.state.trip.legs.map(leg => (
                        <>
                            <Leg key={leg.id}>
                                <Leginfo>
                                    <h1>{leg.place}</h1>
                                    <section>
                                        <p>{leg.desc}</p>
                                        <p><FaCalendarAlt size={15} color={'#FFFFFF'} /><span>{leg.date}</span></p>
                                    </section>
                                </Leginfo>

                                <Legactions>
                                    <Stars review={leg.review} />
                                    <section>
                                        <button>New entry</button>
                                    </section>
                                </Legactions>
                            </Leg>

                            {leg.entries.map(entry => (
                                <Entry key={entry.id}>
                                    <Entryinfo>
                                        <h1>{entry.title}</h1>
                                        <section>
                                            <p><FaCalendarAlt size={15} color={'#333C39'} /><span>{entry.date}</span></p>
                                        </section>
                                        <Entrytext>{entry.content}</Entrytext>
                                    </Entryinfo>
                                </Entry>
                            ))}
                        </>
                    ))}
                </Items>

                <Share>
                    <h1>Share this <span>journal</span></h1>

                    <section>
                        <FaFacebook size={35} color={'#333C39'} />
                        <FaTwitter size={35} color={'#333C39'} />
                        <FaCopy size={35} color={'#333C39'} />
                    </section>
                </Share>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Journal;