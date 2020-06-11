import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Banner, Content, Title, Form} from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import message from '../../components/messages';

class Signin extends Component {

    componentDidMount() {

        // import the function message from '../../components/messages' wherever you want to use it

        // the function accepts two parameters: type and message

        // type parameter can be either error or success. Error will return a red message, success will return a green one.

        // message parameter can be either a string or a array of messages

        message('error', 'this is a error message')

        message('success', 'this is a success message')

        message('error', ['this is a error message 01', 'this is a error message 02'])

        message('success', ['this is a success message 01', 'this is a success message 02'])
    }

    render() {
        return(
            <>
                <Banner>
                    <Content>
                        <Header />

                        <Title>
                            <h1>Login to your <span>account</span></h1>
                        </Title>

                        <Form>
                            <form>
                                <input type="text" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                
                                <button type="submit">Login!</button>
                            </form>
                        </Form>

                        <p>Don't have an account? <Link to="/login">Create a new one.</Link></p>

                    </Content>
                </Banner>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Signin;