import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                <div>
                    <ul>
                    <li><NavLink to="/login">login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;