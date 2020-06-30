import React, {Component} from 'react';

import {Banner, Content, Title, Form} from './styles';

import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

class Profile extends Component {
    render() {
        return(
            <>
                <Banner>
                    <Content>
                        <Header />

                        <Title>
                            <h1>My <span>account</span></h1>
                        </Title>

                        <Form>
                            <form>
                                <input type="text" value="John Doe" placeholder="Full name" />
                                <input type="text" value="johndoe@gmail.com" placeholder="Email" />
                                <input type="password" placeholder="Old password" />
                                <input type="password" placeholder="New password" />
                                <input type="password" placeholder="Confirm new password" />
                                
                                <button type="submit">Edit</button>
                            </form>
                        </Form>

                    </Content>
                </Banner>

                <Services />
                <Footer />
            </>
        )
    }
}

export default Profile;