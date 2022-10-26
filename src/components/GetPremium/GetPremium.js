import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GetPremium = () => {
    const getpre = useLoaderData();
    console.log('fsdjf', getpre)
    return (
        <div>
            <Header></Header>

           
            <Card className='m-5'>
                <Card.Header> <h2>Get Premium Courses!!</h2></Card.Header>
                <Card.Body>
                    <Card.Title>{getpre.name}</Card.Title>
                    <Card.Text>
                        {getpre.description}
                    </Card.Text>
                    <h5>Price: ${getpre.price}</h5>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GetPremium;