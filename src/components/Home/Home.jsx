import React from 'react';
import {useLoaderData} from 'react-router-dom'

const Home = () => {
    const tShart= useLoaderData()
    return (
        <div>
            <h2>this is home {tShart.length}</h2>
        </div>
    );
};

export default Home;