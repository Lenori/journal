import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Trips from '../pages/Trips';
import Journal from '../pages/Journal';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Signin} />
            <Route path="/register" component={Signup} />

            <Route path="/trips" component={Trips} />
            <Route path="/journal" component={Journal} />
        </Switch>
    )
}