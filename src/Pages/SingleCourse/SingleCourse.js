import React from 'react';
import './SingleCourse.css'
import { Button, Card } from 'flowbite-react';

const SingleCourse = ({ course }) => {
    const { image, price, name } = course;

    return (
        <div className="max-w-sm w-50">
            <Card className='card-img'
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    $ {price}
                </p>
                <Button>Buy Now</Button>
            </Card>
        </div>
    );
};

export default SingleCourse;