import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cs from '../Cs/Cs';
import './LeftSide.css'

const LeftSide = () => {
    const courses = useLoaderData()
    return (
        <div>
            {
                courses.map(cs => <Cs key={cs.id} cs={cs}></Cs>)
            }
        </div>
    );
};

export default LeftSide;