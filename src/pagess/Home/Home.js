import React from 'react';
import Exparts from './Expart/Exparts';
import"./Home.css";
import Services from './Services';
const Home = () => {
    return (
        <div>
          <Services></Services>
          <Exparts></Exparts>
        </div>
    );
};

export default Home;