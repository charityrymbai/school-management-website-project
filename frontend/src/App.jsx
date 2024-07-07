import { Routes, Route }from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import TeacherLogin from './pages/TeacherLogin'
import StudentLogin from './pages/StudentLogin'


function App() {
  return (
    <div
      className='bg-blue-50'
      >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/About" element={<About />} ></Route>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/Contact" element={<Contact />} ></Route> 
        <Route path="/Login/teacherLogin" element={<TeacherLogin />} ></Route> 
        <Route path="/Login/studentLogin" element={<StudentLogin />} ></Route> 
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App