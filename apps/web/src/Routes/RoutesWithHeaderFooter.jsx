import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

const Login = React.lazy(() => import('../pages/Login'));
const LoginPortal = React.lazy(() => import('../pages/LoginPortal'));
const Contact = React.lazy(() => import('../pages/Contact'));
const About = React.lazy(() => import('../pages/About'));

const RoutesWithHeaderFooter = () => {
     return (
          <div>
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
