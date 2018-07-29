import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Login, Register, Home, Chat} from '../modules';

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/chat" component={Chat} />
        </div>
    </Router>
);