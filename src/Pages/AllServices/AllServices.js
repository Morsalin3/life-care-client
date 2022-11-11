import React from 'react';
import './AllServices.css'
import { Spinner } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllServiceCard from '../AllServiceCard/AllServiceCard';

const AllServices = () => {
    const services = useLoaderData()
    // console.log(services)

    if(services.length === 0 ){
        return <Spinner animation ="border" variant='success' />
    }

    return (
        <div>
            <h3 className='fw-bold'>My All Services</h3>
            <hr className='contact-border w-50 mx-auto'/>
            <div className='all-service'>
                {
                    services.map(service => <AllServiceCard
                    key={service._id}
                    service={service}
                    ></AllServiceCard>)
                }
            
        </div>
        </div>
    );
};

export default AllServices;