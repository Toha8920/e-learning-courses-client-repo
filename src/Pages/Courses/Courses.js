import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='courses'>
            <div className='courses-container'>
                {courses.map(course => <Course key={course.id} course={course}></Course>)}
            </div>
        </div>
    );
};

export default Courses;