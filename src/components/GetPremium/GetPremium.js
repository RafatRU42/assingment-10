import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const GetPremium = () => {
    const getpre = useLoaderData();
    console.log('fsdjf',getpre)
    return (
        <div>
    <Header></Header>

            <h1>This is get premium</h1>
            <p>{getpre.name}</p>
        </div>
    );
};

export default GetPremium;