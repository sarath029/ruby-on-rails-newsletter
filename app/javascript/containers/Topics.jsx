import React,{useState} from 'react';
import Navigation from '../components/topics/navigation/Navigation';
import Content from '../components/topics/content/Content';

const Topics = () => {

  const [topicsData, setTopicsData] = useState(null);

  return (
    <div>
      <Navigation topicsData={topicsData} setTopicsData={setTopicsData}></Navigation>
      <Content topicsData={topicsData} setTopicsData={setTopicsData}></Content>
    </div>

  );
}
export default Topics;