import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Useservicedetails from '../hooks/Useservisedetails';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = Useservicedetails(serviceId)
    // const [service,setService]=useState({});
    // useEffect(()=>{
    //     fetch(`https://young-hamlet-34340.herokuapp.com/service/${serviceId}`)
    //     .then(res=>res.json())
    //     .then(data=>setService(data))
    // },[serviceId])
    return (
        <div>
            <h1>this is serviceDetail:{service.name}</h1>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>please checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;