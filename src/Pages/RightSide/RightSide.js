import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const RightSide = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='courses-container'>
                {courses.map(course => <Course key={course.id} course={course}></Course>)}
            </div>
        </div>
    );
};

export default RightSide;