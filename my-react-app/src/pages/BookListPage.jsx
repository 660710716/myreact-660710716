import React from 'react';
import {Link} from 'react-router-dom';

const BookList = () => {
    return (
        <div>
            <h1>Welcome to the BookList</h1>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore</p>
            <Link to="/category/fiction"> Go to Categories</Link>
        </div>
    );
}

export default BookList;