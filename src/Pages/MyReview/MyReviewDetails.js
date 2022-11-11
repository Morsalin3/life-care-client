import React from 'react';

const MyReviewDetails = ({review}) => {
    const {displayName, comment} = review;
    return (
        <div>
            <h3>reviews</h3>
            <p>{comment}</p>
        </div>
    );
};

export default MyReviewDetails;