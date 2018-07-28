import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Login, Register, Chat} from '../modules';

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/chat" component={Chat} />
        </div>
    </Router>
);