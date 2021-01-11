import React from 'react'
import { withRouter } from 'react-router-dom';
import Content from '../components/topic/content/Content'
import Navigation from '../components/topics/navigation/Navigation';

const Topic = (params) => {
  return(<div>
    <Navigation></Navigation>
    <Content></Content>
  </div>)
}

export default withRouter(Topic);
