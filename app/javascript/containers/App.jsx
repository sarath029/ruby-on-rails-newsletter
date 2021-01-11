import React, { useEffect, useState } from "react";
import Authenticate from "./Authenticate";
import axios from 'axios';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Topics from "./Topics";
import Topic from "./Topic"
import { connect } from 'react-redux'

const App = (props) => {

    useEffect(() => {
        const url = '/logged_in';
        axios.get(url)
            .then(response => {
                if (response.data['status'] === 200) {
                    props.setIsAuthenticated(true);
                    props.setUser(response.data['data']['user']['id'])
                }
            });
    }, [props.isAuthenticated]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Authenticate></Authenticate>
                </Route>
                <Route path="/topic/:id">
                    {props.isAuthenticated ? <Topic></Topic> : <Authenticate></Authenticate>}
                </Route>

                <Route path="/topics">
                    {props.isAuthenticated ? <Topics></Topics> : <Authenticate></Authenticate>}
                </Route>

                <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
        </BrowserRouter>

    )

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsAuthenticated: (value) => {
            dispatch({ type: 'SETAUTH', val: value});
        },
        setUser: (user) =>{
            dispatch({ type: 'SAVEUSER', user:user})
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
