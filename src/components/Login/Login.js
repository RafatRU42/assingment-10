import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Header from '../Header/Header';

const Login = () => {

    const { loginWithGoogle, loginWithPassword,loginWithGithub } = useContext(authContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation()
    const [error, setError] = useState('')


    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'


    const handleGoogleSignIn = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                navigate(from,{replace:true})
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)

                const errormes = error.message;
                setError(errormes)

            })
    }


    const handleGithubSignIn = () =>{
        loginWithGithub(githubProvider)
        .then(result =>{ navigate(from,{replace:true})})
        .catch(error =>{})
    }


    const handleLoginWithPass = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithPassword(email, password)
            .then(result => { 
                navigate(from,{replace:true})
                form.reset('')
            })
            .catch(error => {
                 console.log(error) 
                form.reset('')
                const errorm = error.message;
                setError(errorm)
                })
    }

    return (
        <div>

            <Header></Header>


            <div class="d-grid gap-2 col-6 mx-auto my-5">
                <button onClick={handleGoogleSignIn} className="btn btn-success p-3 fw-bold" type="button"><FaGoogle></FaGoogle> Login With Google</button>
                <button onClick={handleGoogleSignIn} className="btn btn-dark p-3 fw-bold" type="button"><FaGithub></FaGithub> Login With Github</button>
            </div>


            <div className='w-50 mx-auto mt-5'>
                <Form onSubmit={handleLoginWithPass}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
                    </Form.Group>

                    <h5>Don't Have an Account? Please <Link to={'/register'}>Register</Link> </h5>

                  <h4 className='text-danger'>{error}</h4>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;