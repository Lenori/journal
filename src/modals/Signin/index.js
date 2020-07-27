import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {FaTimesCircle} from 'react-icons/fa'

import Modal from 'react-modal';

import {Banner, Content, Title, Form} from './styles';

const customStyles = {
    content : {
      zIndex: '5'
    }
  };
   

class SigninModal extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        }

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        console.log('close');
        this.setState({modalIsOpen: false});
    }

    componentDidMount() {
        this.setState({modalIsOpen: this.props.openModal});
    }

    render() {
        return(
            <Modal
                isOpen={this.state.modalIsOpen}
                contentLabel="Login modal"
                style={customStyles}
            >
                <Banner>
                    <Content>
                        <FaTimesCircle onClick={() => this.closeModal()} />

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

                        <p>Don't have an account? <Link to="/register">Create a new one.</Link></p>

                    </Content>
                </Banner>
            </Modal>
        )
    }
}

export default SigninModal;