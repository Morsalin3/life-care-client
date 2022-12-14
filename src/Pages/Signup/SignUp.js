import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    UseTitle('SignUp')

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error=>console.error(error));

    }
    return (
        <div className='text-start w-50 mx-auto'>
            <h2> Sign Up</h2>

        <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Button style={{backgroundColor:'#8DC63F', border:'none'}} type="submit">
            Submit
        </Button>  
        </Form>
        <span>
        <p className='text-start mt-2'>Already have an account <Link to='/login'>Login</Link></p>
        </span>
        </div>
    );
};

export default SignUp;