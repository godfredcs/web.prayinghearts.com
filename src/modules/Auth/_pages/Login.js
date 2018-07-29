import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {emailChanged, passwordChanged} from '../_store/AuthActions';

class Login extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="form">
                <div>
                    <h1 style={{color: 'brown'}}>Login</h1>

                    <div className="align-center">
                        <input
                            placeholder="Email"
                            value={this.props.email}
                            onChange={event => this.props.emailChanged(event.target.value)}
                        />
                    </div>

                    <div className="align-center">
                        <input
                            placeholder="Password"
                            value={this.props.password}
                            onChange={event => this.props.passwordChanged(event.target.value)}
                        />
                    </div>

                    <div className="align-center">
                        <button onClick={() => {}} className="login-button">Login</button>
                    </div>
        {/*<button onClick={this.props.showRegister}>Go to register</button>*/ }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {email, password} = state.auth;
    return {email, password};
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(withRouter(Login));