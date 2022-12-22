import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ReviewDetails = ({rev}) => {
        const {comment,photoURL,email, displayName} = rev;

    return (
        <div className='overflow-auto'>
            <h3>{email}</h3>
            <p>{comment}</p>
            <img src={photoURL} alt='user name' />
        </div>
    );
};

export default ReviewDetails;