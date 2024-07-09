import { Routes, Route }from 'react-router-dom'

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
            <Route path="" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Login" element={<Login />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="login/:user" element={<LoginPortal />} />
        </Routes>
        <Footer />
        </div>
}

export default RoutesWithHeaderFooter