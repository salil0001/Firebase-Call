import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Create from './projects/CreateProject';

export default class Container extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />

                        <Route path='/project/:id' component={ProjectDetails} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/create' component={Create} />


                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
