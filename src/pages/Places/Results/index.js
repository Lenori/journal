import React, {Component} from 'react';

import {Content, Items, Item} from './styles';

import Place from './Place';

class Results extends Component {
    constructor() {
        super();

        this.state = {
            place: null
        };
    }

    render() {
        return(
            <Content>
                {!this.state.place &&
                    <Items>
                        {this.props.places.map(place => (
                            <Item>
                                <h2 onClick={() => this.setState({place: place})}>{place.title}</h2>
                                <p>{place.description}</p>
                                <span>{place.hours}</span>
                            </Item>
                        ))}
                    </Items>
                }

                {this.state.place &&
                    <Place
                        place={this.state.place}
                        goBack={() => this.setState({place: null})}
                    />
                }
            </Content>
        )
    }
}

export default Results;