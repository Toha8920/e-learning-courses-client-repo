import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=''>
            <div className='flex justify-center mt-10'>
                <img className='w-50 h-20 rounded-lg ' src="https://png.pngtree.com/png-vector/20190415/ourlarge/pngtree-vector-sad-emoji-icon-png-image_946864.jpg" alt="" />

            </div>
            <p className='text-center'>Sorry, your searching route has not found</p>
            <p className='text-center'>Back to home <Link className='underline text-blue-700' to='/'>Home</Link></p>
        </div>
    );
};

export default NotFound;