import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const detail = useLoaderData()
    const {title, img, details, price, rating,} = detail;

    return (
        <div className='details-container'>
           <div>
           <h1 className='fw-bold'>this service details</h1>
           <hr className='service-border w-75 mx-auto'/>

            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} alt='' />
                <Card.Body className='text-start'>
                <Card.Title className='fw-bold fs-2'>{title}</Card.Title>
                <Card.Text> 
                {details}
                
                </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                <small className="">Price: {price}$</small>
                <small><FaStar className='text-warning' /> {rating}</small>
                <Link>
                <button style={{backgroundColor:'#8DC63F', border:'none'}} className="btn text-white ">Details</button>
                </Link>
                </Card.Footer>
            </Card>
            
            </CardGroup>
           </div>
           <div>
            <h2>User Review</h2>
           </div>
        </div>
    );
};

export default ServiceDetails;