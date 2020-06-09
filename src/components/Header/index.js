import React, {Component} from 'react';
import {Content, Ul, Li} from './styles';

class Header extends Component {
    render() {
        return(
            <Content>
                <Ul>
                    <Li>Home</Li>
                    <Li mark>Sign in</Li>
                    <Li mark>Sign up</Li>
                </Ul>
            </Content>
        )
    }
}

export default Header;