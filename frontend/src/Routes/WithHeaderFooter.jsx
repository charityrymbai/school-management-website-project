import { Routes, Route }from 'react-router-dom'

import Header from "./../components/Header"
import Footer from "./../components/Footer"
import Home from "./../pages/Home"
import About from './../pages/About'
import Login from './../pages/Login'
import Contact from './../pages/Contact'
import TeacherLogin from './../pages/TeacherLogin'
import StudentLogin from './../pages/StudentLogin'

const WithHeaderFooter = () => {
    return <div className='bg-blue-100'>
        <Header />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Login" element={<Login />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login/teacher" element={<TeacherLogin />} />
            <Route path="Login/student" element={<StudentLogin />} />
        </Routes>
        <Footer />
        </div>
}

export default WithHeaderFooter