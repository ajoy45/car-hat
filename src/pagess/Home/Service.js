import React from 'react';
import "./service.css"
const Service = ({service}) => {
    const{name,price,description,img}=service;
    return (
        <div className='single-service'>
            <img src={img} alt="car"></img>
            <h1>{name}</h1>
            <h2>price:${price}</h2>
            <p><small>{description}</small></p>
            <button>Booking:{name}</button>
        </div>
    );
};

export default Service;