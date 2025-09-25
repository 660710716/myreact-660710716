import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1>Welcome to the Contact</h1>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore</p>
            <Link to="/"> Go to Home</Link>
        </div>
    );
}

export default Contact;