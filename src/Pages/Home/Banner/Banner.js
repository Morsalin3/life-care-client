import React from 'react';
import { Image } from 'react-bootstrap';
import banner2 from '../../../assets/images/banner2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-5'>
            <h1 className='fw-bold'>Welcome To My Life Care</h1>
            <hr className='banner-border w-50 mx-auto'/>
            <div className=' position-relative'><Image className='w-100' style={{height:'500px'}} src={banner2} alt=''></Image>
            
            <div className='banner position-absolute translate-middle-y p-4 top-50 start-0'>
                <h2 className='fw-bold '>LEADERS IN <br/>
                    PHYSIOTHERAPY <br/>
                    AND SPORTS <br/>
                    MEDICINE</h2>
            </div>

            </div>
            
        </div>
    );
};

export default Banner;