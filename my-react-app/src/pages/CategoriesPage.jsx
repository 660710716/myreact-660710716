import React from 'react';
import {Link} from 'react-router-dom';

const Categories = () => {
    return (
        <div>
            <h1>Welcome to the Categories</h1>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore</p>
            <Link to="/about"> Go to About</Link>
        </div>
    );
}

export default Categories;