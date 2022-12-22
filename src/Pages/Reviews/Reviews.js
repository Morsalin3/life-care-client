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
    //  console.log(detail, 'card info')
    const [serviceReview, setServiceReiview] = useState([])
    const {_id, title} = detail;
    // const {displayName, photoURL, email} = user;

    const handleReviews = event =>{
        event.preventDefault();
        const form = event.target;
        const details = form.reviews.value;
        // console.log()

      const review ={
            service_id : _id,
            displayName:user?.displayName,
            email:user?.email,
            photoURL:user?.photoURL,
            details
        }

        fetch('https://life-care-server-delta.vercel.app/reviews',{
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
        // console.log(detail)

    useEffect(()=>{
        fetch(`https://life-care-server-delta.vercel.app/servicereviews?service_id=${title?.service_id}`)
        .then(res=> res.json())
        .then(data=>setServiceReiview(data))
    },[title?.service_id])

    // data?.length && data.map(-----for review
    return (

    <div>
        <div className='w-75 mx-auto overflow-auto' style={{height:'300px'}}>
            {
                serviceReview.map(rev => <ReviewDetails
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