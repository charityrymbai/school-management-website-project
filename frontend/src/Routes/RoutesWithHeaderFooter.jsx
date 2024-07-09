import { Routes, Route, Navigate }from 'react-router-dom'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import About from '../pages/About'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import LoginPortal from '../pages/LoginPortal'

const RoutesWithHeaderFooter = () => {
    return <div className='bg-blue-100'>
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
}

export default RoutesWithHeaderFooter