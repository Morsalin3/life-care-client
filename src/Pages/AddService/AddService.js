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
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        // console.log(title , service_id, img , rating ,price,details)

        const service ={
            title,
            img,
            price,
            rating,
            details
        }

        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                if(data.acknowledged){
                    alert('Service palced Successfully')
                    form.reset();
                }

            })
            .catch(error=>console.log(error));
    }

    return (
        <div>
            <h1 className='fw-bold'>Add A Service</h1>
            <hr className='add-service-border w-75 mx-auto'/>
            <form onSubmit={handleService}>
                <div className='service-form w-75 mx-auto text-start'>
                    <label className="form-label m-0" htmlFor="">Service Name</label>
                    <input type='text' name='title' placeholder='Name' className='form-control' required />
                    {/* <label className="form-label m-0" htmlFor="">Service Unique Id</label>
                    <input type='text' name='service_id' placeholder=' Unique Id' className='form-control' required /> */}
                    <label className="form-label m-0" htmlFor="">Service Image Link</label>
                    <input type='text' name='img' placeholder='Image Link' className='form-control' required />
                    <label className="form-label m-0" htmlFor="">Service Price</label>
                    <input type='text' name='price' placeholder='Price' className='form-control' required />
                    <label className="form-label m-0" htmlFor="">Service Rating</label>
                    <input type='text' name='rating' placeholder='Rating' className='form-control' required />
                    <label className="form-label m-0" htmlFor="">Service Details</label>
                    <input type='text' name='details' placeholder='Details' className='form-control' required />
                </div>
                <div>
                    <input  className='btn mt-3 text-white fw-bold' style={{backgroundColor:'#8DC63F', border:'none'}} type="submit" value='place Your Service' />
                </div>
            </form>
        </div>
    );
};

export default AddService;