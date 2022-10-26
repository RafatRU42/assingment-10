import React from 'react';
import './SingleCourse.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCourse = ({ course }) => {
    return (
        <div className='my-2 p-3 singleCourse'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='p-3' variant="top" src= {course.image} />
                <Card.Body>
                    <Card.Title className='d-flex'>{course.name}</Card.Title>
                    <Card.Text className='d-flex ms-1'>
                       {course.description}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;