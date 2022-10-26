import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const {makeUserWithPassword} = useContext(authContext)
    const location = useLocation();

    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL)

        makeUserWithPassword(email, password)
        .then(result =>{
            console.log(result)
            navigate(from,{replace:true})
            form.reset('')
        })
        .catch(error =>{
            console.log('erorr',error)
            const errormes = error.message;
            setError(errormes)
            form.reset('')
        })
    }

    return (
        <div>

            <Header></Header>
            <h1>Please Sign Up</h1>


            <div className='w-50 mx-auto mt-5'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control type="name" name='name' placeholder="Enter Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Enter Your Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                    </Form.Group>

                    <h5>Already Have an Account? Please <Link to={'/login'}>Login</Link> </h5>

                    <Form.Text className="text-muted d-block m-2">
                       <h5 className='text-danger'>{error}</h5>
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