import React, { useEffect, useState } from "react";
import Authenticate from "./Authenticate";
import axios from 'axios';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Topics from "./Topics";

const App = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const url = '/logged_in';
        axios.get(url)
            .then(response => {
                console.log(response.data);
                if (response.data['status'] == 200) {
                    setIsAuthenticated(true);
                }
            });
    })

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Authenticate></Authenticate>
                </Route>

                <Route path="/topics">
                    {isAuthenticated ? <Topics></Topics> : <Authenticate></Authenticate>}
                </Route>

                <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
        </BrowserRouter>
    )

}

export default App;
