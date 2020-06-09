import React, {Component} from 'react';
import {Banner, Content, Title, Form} from './styles';

import Header from '../../components/Header';

class Home extends Component {
    render() {
        return(
            <Banner>
                <Content>
                    <Header />

                    <Title>
                        <h1>Your trip <span>planned</span> like you always <span>dreamed!</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque feugiat nisi, ac faucibu.</p>
                    </Title>

                    <Form>
                        <form>
                            <input type="text" placeholder="Starting" />
                            <input type="text" placeholder="Destination" />
                            
                            <button type="submit">Plan trip!</button>
                        </form>
                    </Form>

                </Content>
            </Banner>
        )
    }
}

export default Home;