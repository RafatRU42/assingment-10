import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header/Header';

const Details = () => {
    const details = useLoaderData();
    console.log('details', details)
    return (
        <div>
            <Header></Header>
            <h1>This is Details</h1>
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={details.image} />
                <Card.Body>
                    <Card.Title>{details.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to={`/courses/0${details.id}`}><Button variant="primary">Get Premium</Button></Link>
                </Card.Body>
            </Card>


        </div>

    );
};

export default Details;