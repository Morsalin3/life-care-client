import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UseTitle from '../../hooks/UseTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    UseTitle('My Review')
    const  [myReviews, setMyReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[user?.email])

    return (
        <div>
            <h2>this review page</h2>
            {
                myReviews.map(review => <MyReviewDetails
                key={review._id}
                review={review}
                ></MyReviewDetails>)
            }
        </div>
    );
};

export default MyReview;