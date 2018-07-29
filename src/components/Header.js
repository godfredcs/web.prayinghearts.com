import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header id="header">
                <h2>Praying Hearts</h2>
                {
                    this.props.authenticated

                        ? <ul>
                            <li><NavLink to="/login">login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </ul>
                        : null
                }
            </header>
        );
    }
}

export default Header;