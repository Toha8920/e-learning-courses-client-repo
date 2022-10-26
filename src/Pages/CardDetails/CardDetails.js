import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CardDetails.css'

const CardDetails = () => {
    const coursesDetails = useLoaderData();
    const { title, image, description } = coursesDetails;
    return (
        <Card className='card-container'>
            <p className='text-2xl text-gray-700'>{title}</p>
            <img src={image} alt="" />
            <p>{description}</p>
        </Card>
    );
};

export default CardDetails;