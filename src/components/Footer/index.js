import React, {Component} from 'react';
import {Footer, Content, Form} from './styles';

class Services extends Component {
    render() {
        return(
            <Footer>
                <Content>
                    <h1>Join our <span>newsletter!</span></h1>

                    <Form>
                        <form>
                            <input type="text" placeholder="E-mail" />

                            <button type="submit">Join</button>
                        </form>
                    </Form>

                    <p>© 2020, all rights reserved.</p>
                </Content>
            </Footer>
        )
    }
}

export default Services;