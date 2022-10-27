import React from 'react';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>

            <h3>1. What is CORS ?</h3>
            <h3>Ans.  CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content</h3>
            <hr />
            <h3>2.Why You use Firebase ? </h3>
            <h3>Ans. Firebase is an authentication system app. It is easy to apply and much secure. The alternatives of firebase is MongoDB, Orcle Database etc.</h3>
            <hr />
            <h3>3.How dees private routes work?</h3>
            <h3>Ans. Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</h3>
                <hr />
                <h3>4.what is Node ? How does Node works? </h3>
                <h3>Ans. Node.js is an open source server environment.
It is free.
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).Node.js can generate dynamic page content.
It can create, open, read, write, delete, and close files on the server</h3>

        </div>
       

    );
};

export default Blog;