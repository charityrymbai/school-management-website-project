import { Routes, Route }from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import NavBar from './components/NavBar'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/About" element={<About />} ></Route>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/Contact" element={<Contact />} ></Route> 
      </Routes>
      <Footer />
      
    </>
  )
}

export default App