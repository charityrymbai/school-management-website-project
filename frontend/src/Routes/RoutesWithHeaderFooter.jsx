import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import LoginPortal from '../pages/LoginPortal';

const Contact = React.lazy(() => import('../pages/Contact'));
const About = React.lazy(() => import('../pages/About'));

const RoutesWithHeaderFooter = () => {
    return (
        <div className="bg-blue-100">
            <Header />
            <Routes>
                <Route path="" element={<Navigate to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login/:user" element={<LoginPortal />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default RoutesWithHeaderFooter;
