import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetPremium = () => {
    const getpre = useLoaderData();
    console.log('fsdjf',getpre)
    return (
        <div>
            <h1>This is get premium</h1>
            <p>{getpre.name}</p>
        </div>
    );
};

export default GetPremium;