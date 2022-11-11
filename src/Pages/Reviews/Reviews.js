import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const {user} = useContext(AuthContext)
    const {displayName, photoURL, email, uid} = user;

    const handleReviews = event =>{
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        console.log(review)

      const  reviews ={
            uid,
            displayName,
            email,
            photoURL,
            review
        }
    }

    // data?.length && data.map(-----for review
    return (

    <div>
        <div className='w-75 mx-auto'>
        <CardGroup>
            <Card>
                <Card.Img variant="top" src='' alt='' />
                <Card.Body className='text-start'>
                <Card.Title className='fw-bold fs-2'></Card.Title>
                <Card.Text> body
                
                </Card.Text>
                </Card.Body>
            </Card>   
            </CardGroup>
        </div>
       
        <form onSubmit={handleReviews}>
                <div className='review-form w-75 mx-auto mt-4 text-start'>
                   
                    {user?.email ?
                    <>
                    <label className="form-label m-0" htmlFor=""> Add Your Review</label>
                    <textarea type='text' name='review' placeholder='review' className='form-control' required />
                
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