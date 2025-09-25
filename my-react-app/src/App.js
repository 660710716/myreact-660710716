import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
//import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import NotFound from './components/NotFound';
import BookList from './pages/BookListPage';
import Categories  from './pages/CategoriesPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
        <Navbar />
        <main className="main-content">
        <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />

          <Route path="/books" element={<BookList />} />

          <Route path="/category/fiction" element={<Categories />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />


        </Routes>
        </main>
    {/* <Footer /> */}
    </div>
  );
}

export default App;

