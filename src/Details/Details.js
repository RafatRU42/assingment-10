import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header/Header';
import './Details.css'




const Details = () => {
    const details = useLoaderData();
    console.log('details', details)
    return (
        <div>
            <Header></Header>
           <div className='cardd'>

           <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={details?.image} />
                <Card.Body>
                    <Card.Title>{details?.title}</Card.Title>
                    <Card.Text>
                   {details?.description}

                    </Card.Text>
                    <Link to={`/courses/0${details.id}`}><Button variant="primary">Get Premium</Button></Link>
                </Card.Body>
            </Card>
           </div>


        </div>

    );
};

export default Details;