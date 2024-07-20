import { Link } from "react-router-dom"
import './NavBar.css';
const NavBar = ()=>{
    return (
        <div>
            <nav className="flex justify-around h-12 bg-white">
                <ul className="w-60% md:w-[50%] flex justify-around py-2 font-bold text-lg ">
                    <li className="nav-item">
                        <Link to="/home" className="bg-clip-text text-transparent bg-gray-900 hover:text-[#990011] transition-colors duration-300">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="bg-clip-text text-transparent bg-gray-900 hover:text-[#990011] transition-colors duration-300">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="bg-clip-text text-transparent bg-gray-900 hover:text-[#990011] transition-colors duration-300">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="bg-clip-text text-transparent bg-gray-900 hover:text-[#990011] transition-colors duration-300">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar