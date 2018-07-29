import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {emailChanged, passwordChanged} from '../_store/AuthActions';

class Login extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>This is the Login screen</p>
                <input value={this.props.email} onChange={event => this.props.emailChanged(event.target.value)} />
                <input value={this.props.password} onChange={event => this.props.passwordChanged(event.target.value)} />
                <hr />
                <p>email: {this.props.email}</p>
                <p>password: {this.props.password}</p>
                <button onClick={this.props.showRegister}>Go to register</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {email, password} = state.auth;
    return {email, password};
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(withRouter(Login));