import React, { useEffect, useState } from "react";
import Authenticate from "./Authenticate";
import axios from 'axios';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

const App = () => {

    const [IsAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const url = '/logged_in';
        axios.get(url)
            .then(response => {
                setIsAuthenticated(true);
            });

    }, [IsAuthenticated])

    if (IsAuthenticated) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Authenticate></Authenticate>
                    </Route>
                </Switch>

            </BrowserRouter>
        )
    }
    else {

        return (
            <BrowserRouter>
                <Redirect to="/" />
            </BrowserRouter>
        )
    }

}

export default App;
