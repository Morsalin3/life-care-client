import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewDetails from './ReviewDetails';

const Review = () => {
    const {user} = useContext(AuthContext)
    const detail = useLoaderData();
    const [reviews, setReviews] = useState([])

    const {_id,} = detail;
    const {displayName, photoURL, email} = user;

    const handleReviews = event =>{
        event.preventDefault();
        const form = event.target;
        const details = form.reviews.value;
        // console.log()

      const review ={
            service_id : _id,
            displayName,
            email,
            photoURL,
            details
        }

        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                if(data.acknowledged){
                    alert('Review placed Successfully')
                    form.reset();
                }

            })
            .catch(error=>console.log(error));
    }
        console.log(detail)
    useEffect(()=>{
            fetch(`http://localhost:5000/reviews?service_id=${detail._id}`)
            .then(res=> res.json())
            .then(data=> setReviews(data))
    },[detail?._id])

    // data?.length && data.map(-----for review
    return (

    <div>
        <div className='w-75 mx-auto'>
            {
                reviews.map(rev => <ReviewDetails
                key={rev._id}
                rev={rev}
                ></ReviewDetails>)
            }
        </div>
       
        <form onSubmit={handleReviews}>
                <div className='review-form position-sticky w-75 mx-auto mt-4 text-start'>
                   
                    {user?.email ?
                    <>
                    <label className="form-label m-0" htmlFor=""> Add Your Review</label>
                    <textarea type='text' name='reviews' placeholder='review' className='form-control' required />
                
                    <input  className='btn mt-3 text-white fw-bold' style={{backgroundColor:'#8DC63F', border:'none'}} type="submit" value='Please add a review' />
                    </>
                    :
                    <>
                     <Link to='/login'>
                     <input  className='btn mt-3 text-white fw-bold' style={{backgroundColor:'#8DC63F', border:'none'}} type="submit" value='Please login to add a review' />
                     </Link>
                    </>

                    }
                </div>
            </form>
    </div>
    );
};

export default Review;