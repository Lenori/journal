import React, {Component} from 'react';
import {Content, Items, Item} from './styles';

import {FaMapMarkerAlt, FaNewspaper, FaStar} from 'react-icons/fa'

class Services extends Component {
    render() {
        return(
            <Content>
                <h1>Everything you <span>need</span>, in just one <span>place!</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque feugiat nisi, ac faucibu.</p>

                <Items>

                    <Item>
                        <FaMapMarkerAlt size={50} color="#333C39" />
                        <p>Add, edit and remove the legs of your trip</p>
                    </Item>

                    <Item>
                        <FaNewspaper size={50} color="#333C39" />
                        <p>Keep a journal of your adventure</p>
                    </Item>

                    <Item>
                        <FaStar size={50} color="#333C39" />
                        <p>Review and share your experiences with your friends</p>
                    </Item>

                </Items>
            </Content>
        )
    }
}

export default Services;