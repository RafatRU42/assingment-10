import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
    return (
        <div>

            <Header></Header>


            <div class="d-grid gap-2 col-6 mx-auto my-5">
                <button className="btn btn-success p-3 fw-bold" type="button"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn btn-dark p-3 fw-bold" type="button"><FaGithub></FaGithub> Login With Github</button>
            </div>


       <div className='w-50 mx-auto mt-5'>
       <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <h5>Don't Have an Account? Please <Link to={'/register'}>Register</Link> </h5>

                <Form.Text className="text-muted d-block m-2">
                        We'll never share your email with anyone else.
                    </Form.Text>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
       </div>
        </div>
    );
};

export default Login;