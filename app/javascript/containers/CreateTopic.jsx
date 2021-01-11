import React from 'react'
import { withRouter } from 'react-router-dom';
import Navigation from '../components/topics/navigation/Navigation';
import Content from '../components/createTopic/content/Content';

const CreateTopic = (params) => {
    return (<div>
        <Navigation></Navigation>
        <Content></Content>
    </div>)
}

export default withRouter(CreateTopic);
