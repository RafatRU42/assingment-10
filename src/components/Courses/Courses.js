import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../Course/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <h2>This is Courses</h2>
            <p>{courses.length}</p>
            {
                courses.map(course => <SingleCourse course = {course}></SingleCourse>)
            }
        </div>
    );
};

export default Courses;