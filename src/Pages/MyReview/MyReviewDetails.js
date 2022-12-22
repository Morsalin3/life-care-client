import React from 'react';

const MyReviewDetails = ({ review }) => {
    const { displayName, photoURL, details } = review;
    return (
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={photoURL} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{displayName}</h5>
                    <p className="card-text">{details}</p>
                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
    </div>

    );
};

export default MyReviewDetails;