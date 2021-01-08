import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = (props) => {


    if (props.isAuthenticated) {
        return (<div>Home</div>)
    } else {
        return(<Redirect to='/'></Redirect>)
    }

}
export default Home;