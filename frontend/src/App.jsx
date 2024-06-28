import { Routes, Route }from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Teacher from './pages/Teacher'
import Student from './pages/Student'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/About" element={<About />} ></Route>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/Contact" element={<Contact />} ></Route> 
        <Route path="/Login/teacher" element={<Teacher />} ></Route> 
        <Route path="/Login/student" element={<Student />} ></Route> 
      </Routes>
      <Footer />
      
    </>
  )
}

export default App