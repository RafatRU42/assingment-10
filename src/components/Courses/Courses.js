import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../Course/SingleCourse';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'
import './Courses'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)

    // {
    //     courses.map(coursess => <LeftSideNav course = {coursess}></LeftSideNav>)
    // }
    return (
        <div className=''>
            <h2>Here Are the Top Six Courses!!!</h2>
           <div className='course'>
            
           {
                courses.map(course => <SingleCourse course = {course}></SingleCourse>,courses.map(coursess=> <LeftSideNav course ={coursess}></LeftSideNav>))
            }

          
           </div>
        </div>
    );
};

export default Courses;