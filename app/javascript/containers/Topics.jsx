import React from 'react';
import './Topics.scss'
import Navigation from '../components/topics/navigation/Navigation';
import Content from '../components/topics/content/Content';
import { withRouter } from 'react-router-dom';

const Topics = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Content></Content>
    </div>

  );
}
export default withRouter(Topics);