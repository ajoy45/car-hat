import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'
const Services = () => {
    const [servicess, setServicess] = useState([]);

    useEffect(() => {
        fetch("https://young-hamlet-34340.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServicess(data))
    }, [])
    return (
        <div id='service'>
            <h1 className='services-title'>MY SERVICES</h1>

            <div className='servicess-container'>
                {
                    servicess.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;