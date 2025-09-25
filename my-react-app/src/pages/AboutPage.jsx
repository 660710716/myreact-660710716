import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>Welcome to the About</h1>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore</p>
            <Link to="/contact"> Go to Contact</Link>
        </div>
    );
}

export default About;