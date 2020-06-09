import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Content, Ul, Li} from './styles';

class Header extends Component {
    render() {
        return(
            <Content>
                <Ul>
                    <Link to="/"><Li>Home</Li></Link>
                    <Link to="/login"><Li mark>Sign in</Li></Link>
                    <Link to="/register"><Li mark>Sign up</Li></Link>
                </Ul>
            </Content>
        )
    }
}

export default Header;