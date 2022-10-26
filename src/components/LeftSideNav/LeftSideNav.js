import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './LeftSideNav.css'

const LeftSideNav = () => {
    
    return (
        <div>
           <h3>The Courses!!!</h3>
        <div className='btn'>
        <Button variant='info'><Link to={'/courses/1'}>Web Design</Link></Button>
          <Button variant='info'><Link to={'/courses/2'}>Web Development</Link></Button>
          <Button variant='info'><Link to={'/courses/3'}>Video Editing</Link></Button>
          <Button variant='info'><Link to={'/courses/4'}>Digital Marketing</Link></Button>
          <Button variant='info'><Link to={'/courses/5'}>Data Entry</Link></Button>
          <Button variant='info'><Link to={'/courses/6'}>Content Writing</Link></Button>
        </div>
        </div>
    );
};

export default LeftSideNav;