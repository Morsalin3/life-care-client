import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ReviewDetails = ({rev}) => {


    return (
        <div className='overflow-auto'>
            <h3>this review</h3>
            {/* <CardGroup>
            <Card>
                <Card.Img variant="top" src='' alt='' />
                <Card.Body className='text-start'>
                <Card.Title className='fw-bold fs-2'></Card.Title>
                <Card.Text> body
                
                </Card.Text>
                </Card.Body>
            </Card>   
            </CardGroup> */}
        </div>
    );
};

export default ReviewDetails;