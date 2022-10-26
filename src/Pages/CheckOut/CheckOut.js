import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cs from '../Cs/Cs';

const CheckOut = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            <p>{courses.name}</p>
        </div>
    );
};

export default CheckOut;