import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllServiceCard = ({service}) => {
    const {_id, details, img, price, title, rating} = service;
    return (
        <div>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} alt='' />
                <Card.Body className='text-start'>
                <Card.Title className='fs-3'>{title}</Card.Title>
                <Card.Text>
                {details?.length > 80 ?
                <>{details.slice(0, 80) + '...'}</>
                :
                <>{details}</>
                }
                </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                <small className="">Price: {price}$</small>
                <small><FaStar className='text-warning' /> {rating}</small>
                <Link to={`/details/${_id}`}>
                <button style={{backgroundColor:'#8DC63F', border:'none'}} className="btn text-white ">Details</button>
                </Link>
                </Card.Footer>
            </Card>
            
            </CardGroup>
        </div>
    );
};

export default AllServiceCard;