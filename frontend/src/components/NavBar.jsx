import {useNavigate} from 'react-router-dom'

const NavBar = ()=>{

    const navigate = useNavigate()

    return (
        <div>
            <nav className="flex justify-around h-12 bg-yellow-500">
                <ul className="w-full md:w-[50%] flex justify-around py-3">
                    <button
                        onClick={()=>{
                            navigate("/")
                        }}
                    >Home</button>
                    <button
                        onClick={()=>{
                            navigate("/About")
                        }}
                    >About</button>
                    <button
                        onClick={()=>{
                            navigate("/Login")
                        }}
                    >Login</button>
                    <button
                        onClick={()=>{
                            navigate("/Contact")
                        }}
                    >Contact</button>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar