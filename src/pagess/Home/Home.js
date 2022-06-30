import React from 'react';

import Banner from './Banner/Banner';
import Exparts from './Expart/Exparts';
import Footer from '../../Shared/Footer/Footer'
import"./Home.css";
import Services from './Services';
const Home = () => {
    return (
        <div>
          
          <Banner></Banner>
          <Services></Services>
          <Exparts></Exparts>
          <Footer></Footer>
        </div>
    );
};

export default Home;