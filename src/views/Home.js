import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Team from '../components/sections/Team';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull invertColor className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit invertMobile imageFill topDivider />
        <Team />
      </React.Fragment>
    );
  }
}

export default Home;