import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cs from '../Cs/Cs';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            {
                courses.map(cs => <Cs key={cs.id} cs={cs}></Cs>)
            }

        </div>
    );
};

export default Home;