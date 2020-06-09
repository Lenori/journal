import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Banner, Content, Title, Form} from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

class Signin extends Component {
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