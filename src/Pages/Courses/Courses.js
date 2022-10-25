import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import './Courses.css'

const Courses = () => {

    return (
        <div className='courses'>
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
    );
};

export default Courses;