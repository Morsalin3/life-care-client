import React from 'react';
import { Image } from 'react-bootstrap';
import banner2 from '../../../assets/images/banner2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-5'>
            <h2>this is Banner</h2>
            <div className=' position-relative'><Image className='w-100' style={{height:'500px'}} src={banner2} alt=''></Image>
            
            <div className='banner position-absolute translate-middle-y p-4 top-50 start-0'>
                <h2 className='text-white fw-bold '>LEADERS IN <br/>
                    PHYSIOTHERAPY <br/>
                    AND SPORTS <br/>
                    MEDICINE</h2>
            </div>

            </div>
            
        </div>
    );
};

export default Banner;