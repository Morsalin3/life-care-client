import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { ButtonGroup } from 'react-bootstrap';
import UseTitle from '../../hooks/UseTitle';

const LogIn = () => {
    const {login, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    UseTitle('login');

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

            login(email, password)
            .then(result=>{
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, {replace: true});

            })
            .catch(error=>console.log(error))
    }

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error=>console.log(error))
    }


    return (
        <div className='text-start w-50 mx-auto'>
            <h2>Login</h2>

        <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Button style={{backgroundColor:'#8DC63F', border:'none',marginRight:'5px'}} type="submit">
                Submit
            </Button><span><ButtonGroup>
                    <Button onClick={handleGoogleSignIn} variant="outline-success"><FaGoogle></FaGoogle>  Log in With Google
                    </Button>
                    </ButtonGroup></span>
        </Form>
        <p className='text-start mt-2'>New to Life Care <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default LogIn;