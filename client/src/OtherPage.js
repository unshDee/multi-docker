import React from 'react';
import { Link } from 'react-router-dom';

var page = () => {
    return (
        <div>
            I'm some other page!
            <br />
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default page;