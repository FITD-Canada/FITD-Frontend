import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Auth from '../pages/Auth/auth.index';
import ForgotPwd from '../pages/ForgotPwd/ForgotPwd.index';
import ResetPwd from '../pages/ResetPwd/ResetPwd.index';

import HomePage from '../pages/Home/HomePage.index';
import Coaching from '../pages/Coaching/Coaching.index';
import Content from '../pages/Content/Content.index';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const RootRoute = () => {
    return (
        <BrowserRouter>
            <Container>
                <Navbar />
                    <Switch>
                        <Route path="/" component={HomePage} />
                        <Route path='/coaching' component={Coaching} />
                        <Route path='/content' component={Content} />
                        <Route path='/auth' exact component={Auth} />
                        <Route path='/resetpw/:token/:email' exact component={ResetPwd} />
                        <Route path='/forgotPwd' exact component={ForgotPwd} />
                    </Switch>
                <Footer />
            </Container>
        </BrowserRouter>
    );
};

export default RootRoute;