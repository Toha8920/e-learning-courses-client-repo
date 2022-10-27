import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cs from '../Cs/Cs';

const CheckOut = () => {
    const courses = useLoaderData();
    const { image, name, title } = courses;
    return (
        <div className="mx-auto max-w-xs p-6 rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-50">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
            <p className="dark:dark:text-gray-100">{title}</p>
        </div>
    );
};

export default CheckOut;