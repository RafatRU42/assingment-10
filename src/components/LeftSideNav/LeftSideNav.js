import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const LeftSideNav = ({course}) => {
    // const course = useLoaderData();
    // console.log('course',course)
    return (
        <div>
           <h3>The Courses!!!</h3>
           <h4>{course?.name}</h4>
        </div>
    );
};

export default LeftSideNav;