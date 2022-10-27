import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { authContext } from '../AuthProvider/AuthProvider';

const GetPremium = () => {
    const getpre = useLoaderData();
    const {user} = useContext(authContext)
    console.log('fsdjf', getpre)
    return (
        <div>
            <Header></Header>

           
            <Card className='m-5'>
                <Card.Header> <h2>Get Premium Courses!!</h2></Card.Header>
                <Card.Body>
                    <Card.Title>{getpre.name}</Card.Title>
                    <Card.Text>
                        <h3> Your Name: {user?.displayName}</h3>
                        <h3>Your Email Address: {user?.email}</h3>
                        {getpre.description}
                    </Card.Text>
                    <h5>Price: {getpre.price}</h5>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GetPremium;