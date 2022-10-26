import { Button, Card } from 'flowbite-react';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CardDetails.css'

const CardDetails = () => {
    const coursesDetails = useLoaderData();
    const { title, image, description, id } = coursesDetails;

    const handleBtn = () => {

    }
    return (
        <div>

            <div className='flex justify-between'>
                <p className='text-2xl  font-bold tracking-tight text-gray-900 dark:text-white'>{title}</p>
                <div>
                    <Button><FaDownload></FaDownload> Download Now</Button>

                </div>
            </div>
            <div className="max-w-sm card-container">

                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={image}
                >
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                    <Button><Link to={`/checkout/${id}`}>Get premium access</Link></Button>
                </Card>
            </div>
        </div>
    );
};

export default CardDetails;