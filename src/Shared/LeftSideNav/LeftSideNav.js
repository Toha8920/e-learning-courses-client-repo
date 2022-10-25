import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const LeftSideNav = () => {
    const courses = useLoaderData()
    console.log(courses)

    return (
        <div>

            {/* <div>
                <div className='f mt-3'>
                    <button type="button" className="flex justify-center items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaGoogle className='mr-2'></FaGoogle>Login with google</button>
                </div>
                <div className=' mt-3'>
                    <button type="button" className="flex justify-center items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaGoogle className='mr-2'></FaGoogle>Login with google</button>
                </div>
                <div className=' mt-3'>
                    <button type="button" className="flex justify-center items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><FaGoogle className='mr-2'></FaGoogle>Login with google</button>
                </div>
            </div> */}
        </div>
    );
};

export default LeftSideNav;