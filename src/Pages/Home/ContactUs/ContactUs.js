import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import about from '../../../assets/images/about.PNG'
import { Image } from 'react-bootstrap';
import './ContactUs.css'


const ContactUs = () => {
    return (
    <div className='row text-start mt-5'>
            
        <div className='col-12 col-md-6'>
            <h1 className='fw-bold'>Get In Touch</h1>
            <hr className='contact-border'/>
            <h5 className='text-muted'>I'am here to help.</h5>
            <p className='text-muted'>Alternatively fill in the form and i will get back to you:</p>
                <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone Nuber</Form.Label>
                <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px', marginBottom:'10px'}}
            />
            </FloatingLabel>

            <Button style={{backgroundColor:'#8DC63F', border:'none'}} type="submit">
                Submit
            </Button>
            </Form>
        </div>

            <div className='col-12 col-md-6 d-flex flex-column ps-5 '>
                <Image className='w-75 pb-3 mt-4' src={about} alt='' />
                <h4 className='fw-semibold'>Head Office:</h4>
                <div className='text-muted'>
                    
                    <p>The Royal Building<br/>
                    85 Lourance Road, New York<br/>
                    HL 214588<br/>
                    </p>
                    <p>
                    Tel: 1800 456 7890<br/>
                    Email: info@caregiver.co.in<br/>
                    </p>
                </div>

            </div>
    </div>
    );
};

export default ContactUs;