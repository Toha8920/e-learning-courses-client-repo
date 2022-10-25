import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const coursesDetails = useLoaderData();
    console.log(coursesDetails)
    return (
        <div>
            <h1>this is card detials</h1>
        </div>
    );
};

export default CardDetails;