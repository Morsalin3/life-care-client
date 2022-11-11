import React from 'react';

const MyReviewDetails = ({review}) => {
    const {displayName, comment} = review;
    return (
        <div>
        
            <p>{comment}</p>
        </div>
    );
};

export default MyReviewDetails;