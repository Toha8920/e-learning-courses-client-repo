import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const RightSide = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {courses.map(course => <Course key={course.id} course={course}></Course>)}
            </div>
        </div>
    );
};

export default RightSide;