import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./service.css"
const Service = ({service}) => {
    const navigate=useNavigate();
    const{_id,name,price,description,img}=service;
    const navigateToServiceDtail=id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='single-service'>
            <img className='w-full' src={img} alt="car"></img>
            <h1>{name}</h1>
            <h2>price:${price}</h2>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDtail(_id)}>Booking:{name}</button>
        </div>
    );
};

export default Service;