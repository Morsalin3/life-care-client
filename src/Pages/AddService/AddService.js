import React from 'react';
import UseTitle from '../../hooks/UseTitle';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddService.css'

const AddService = () => {
    UseTitle('Add Service')

    const handleService = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const service_id = form.service_id.value;
        const img = form.img.value;
        const price = form.pirce.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const service ={
            title,
            service_id,
            img,
            price,
            rating,
            details
        }
    }

    return (
        <div>
            <h1 className='fw-bold'>Add A Service</h1>
            <hr className='add-service-border w-75 mx-auto'/>
            <form onSubmit={handleService}>
                <div className='service-form w-75 mx-auto'>
                    <input type='text' name='title' placeholder='Service Name' className='form-control' />
                    <input type='text' name='service_id' placeholder='Service Id' className='form-control' />
                    <input type='text' name='img' placeholder='Service Image Link' className='form-control' />
                    <input type='text' name='pirce' placeholder='Service Price' className='form-control' />
                    <input type='text' name='rating' placeholder='Service Rating' className='form-control' />
                    <input type='text' name='details' placeholder='Service Details' className='form-control' />
                </div>
                <div>
                    <input  className='btn mt-3 text-white fw-bold' style={{backgroundColor:'#8DC63F', border:'none'}} type="submit" value='place Your Service' />
                </div>
            </form>
        </div>
    );
};

export default AddService;