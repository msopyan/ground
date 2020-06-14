import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesSplit invertMobile topDivider imageFill />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;