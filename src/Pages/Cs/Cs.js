import React from 'react';
import { Link } from 'react-router-dom';

const Cs = ({ cs }) => {
    const { name, id } = cs;

    return (
        <div className='text-container'>
            <Link to={`/details/${id}`}><p className='text-2xl'>{name}</p></Link>
        </div>
    );
};

export default Cs;