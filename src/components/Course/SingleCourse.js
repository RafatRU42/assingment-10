import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({course}) => {
    return (
        <div className='course'>
           <div>
           <h2>{course.name}</h2>
            <h4>{course.title}</h4>
            <h4>{course.category}</h4>
           </div>
        </div>
    );
};

export default SingleCourse;