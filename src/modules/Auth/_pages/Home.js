import React from 'react';

import {Header, Footer} from '../../../components';

import Login from './Login';
import Register from './Register';

class Home extends React.Component {
    state = { showLogin: true };

    render() {
        return (
            <div style={styles.container}>
                <Header authenticated={false} />

                <div>
                    {
                        this.state.showLogin
                            ? <Login showRegister={() => this.setState({showLogin: false})} />
                            : <Register showLogin={() => this.setState({showLogin: true})} />
                    }
                </div>

                <Footer />
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'
    }
}

export default Home;