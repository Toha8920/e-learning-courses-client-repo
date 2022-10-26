import { Button, Card } from 'flowbite-react';
import React, { useRef } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CardDetails.css'
import ReactToPdf from "react-to-pdf";





const CardDetails = () => {
    const coursesDetails = useLoaderData();
    const { title, image, description, id } = coursesDetails;

    const ref = useRef();

    return (

        <div className=" mx-auto border max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className='flex justify-between p-5'>
                <p>{title}</p>
                <button>generate to pdf</button>
            </div>
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                    <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <Button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</Button>
            </div>
        </div>
    );
};

export default CardDetails;