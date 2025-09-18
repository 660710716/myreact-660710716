import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore</p>
            <Link to="/book"> Go to Book List</Link>
        </div>
    );
}

export default HomePage;