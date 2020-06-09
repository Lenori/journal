import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Banner, Content, Title, Form} from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

class Signup extends Component {
    render() {
        return(
            <>
                <Banner>
                    <Content>
                        <Header />

                        <Title>
                            <h1>Create a new <span>account</span></h1>
                        </Title>

                        <Form>
                            <form>
                                <input type="text" placeholder="Full name" />
                                <input type="text" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm password" />
                                
                                <button type="submit">Create!</button>
                            </form>
                        </Form>

                        <p>Already have an account? <Link to="/login">Login instead.</Link></p>

                    </Content>
                </Banner>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Signup;