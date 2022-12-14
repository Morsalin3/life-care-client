import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UseTitle from '../../hooks/UseTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    UseTitle('My Review')
    const  [myReviews, setMyReviews] = useState([]);
    console.log(myReviews);

    useEffect(()=>{
        fetch(`https://life-care-server-delta.vercel.app/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyReviews(data))
    },[user?.email])

    return (
        <div className=''>
            <h2> My  Reviews</h2>
            <hr className='add-service-border w-50 mx-auto'/>
           <div className='w-50 m-auto'>
           {
                myReviews.map(review => <MyReviewDetails
                key={review._id}
                review={review}
                ></MyReviewDetails>)
            }
           </div>
        </div>
    );
};

export default MyReview;