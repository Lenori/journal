import React, {Component} from 'react';

import {Content, Categories, Category, Items, Item} from './styles';

import Place from './Place';

class Results extends Component {
    constructor() {
        super();

        this.state = {
            place: null,
            category: null
        };
    }

    render() {
        return(
            <Content>
                {!this.state.place &&
                    <>
                    <Categories>
                        <Category
                            selected={this.state.category == null ? true : false}
                            onClick={() => this.setState({category: null})}>
                                All ({this.props.places.length})
                        </Category>
                        {this.props.categories.map(category => (
                            <Category
                            selected={this.state.category == category.name ? true : false}
                            onClick={() => this.setState({category: category.name})}>
                                {category.name} ({category.total})
                            </Category>
                        ))}
                    </Categories>
                    <Items>
                        {this.props.places.map(place => (
                            <Item
                                show={this.state.category == null || this.state.category == place.category ? true : false}
                            >
                                <h2 onClick={() => this.setState({place: place})}>{place.title}</h2>
                                <span>{place.category}</span>
                                <p>{place.description}</p>
                                <span>{place.hours}</span>
                            </Item>
                        ))}
                    </Items>
                    </>
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