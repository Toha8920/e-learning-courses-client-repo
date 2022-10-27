import React from 'react';
import { Link } from 'react-router-dom';

const Cs = ({ cs }) => {
    const { name, id } = cs;

    return (
        <div className='border shadow-md flex justify-center'>
            <div>
                <Link to={`/details/${id}`}><p className='text-2xl'>{name}</p></Link>
            </div>
        </div>
    );
};

export default Cs;