import React from 'react';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>

            <Header></Header>
            <h1>Please Sign Up</h1>
            

       <div className='w-50 mx-auto mt-5'>
       <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control type="name" name= 'name' placeholder="Enter Your Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="text" name= 'photoURL' placeholder="Enter Your Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name= 'password' placeholder="Enter Your Password" />
                </Form.Group>

                <h5>Already Have an Account? Please <Link to={'/login'}>Login</Link> </h5>

                <Form.Text className="text-muted d-block m-2">
                        We'll never share your email with anyone else.
                    </Form.Text>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
       </div>
        </div>
    );
};

export default Register;