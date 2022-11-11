import React, { useEffect, useState } from 'react';
import UseTitle from '../../../hooks/UseTitle';
import ServiceCard from './ServiceCard';
import './service.css'
import AllServices from '../../AllServices/AllServices';
// import AllServices from '../../AllServices/AllServices';

const Services = () => {
    UseTitle('Services')
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])


    return (
   
    <div className='mt-5'>
        <div>
        <h1 className='fw-bold'>Services</h1>
        <hr className='contact-border w-50 mx-auto'/>
        <h4 className='text-muted'>My services suppot every body at every life stage.</h4>
        </div>
        <div className='service-container text-start'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard> )
            }
        </div>
    
    </div>

    );
};

export default Services;