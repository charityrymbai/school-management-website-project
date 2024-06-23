import { useState, useEffect } from "react";

function Header(){
    const [scrollY, setScrollY] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    },[window.innerWidth])

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerHeight = Math.max(70, 350 - scrollY);
    const imageWidth = Math.max(50, 200 - scrollY);
    const fontSize = Math.max(((screenWidth<650)? 1 : 1.5), ((screenWidth<768)? 2:3) - scrollY/100); 
  
    return (
        <div 
            style={{
                    height: `${headerHeight}px`,
            }}
            className="fixed top-0 w-full"
        >
            <div  
                className="h-full flex justify-center items-center bg-blue-500 p-2"
            >
                <div>
                    <img
                        style={{
                            width: `${imageWidth}px`
                        }}
                        className="rounded-full"
                        alt="school-logo"
                        src="../../images/school_logo.png" 
                    />
                </div>
                <div className="pl-5 w-fit text-white">
                    <div 
                        style={{
                            fontSize: `${fontSize}rem`
                        }}
                        className="text-center"
                    >
                        Some Random Higher Secondary School, RandomPlace
                    </div>
                </div> 
            </div>
            <nav className="flex justify-around h-12 bg-yellow-500">
                <ul className="w-full md:w-[50%] flex justify-around py-3">
                    <button>Home</button>
                    <button>About</button>
                    <button>Login</button>
                    <button>Contact</button>
                </ul>
            </nav>
        </div>
    )
}

export default Header