import { Link } from "react-router-dom"

const NavBar = ()=>{
    return (
        <div>
            <nav className="flex justify-around h-12 bg-yellow-500">
                <ul className="w-full md:w-[50%] flex justify-around py-3">
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/contact"}>Contact</Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar