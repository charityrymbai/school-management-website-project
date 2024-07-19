import { useState, useEffect } from "react";
import NavBar from "./NavBar";

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

    const headerHeight = Math.max(70, 300 - scrollY);
    const imageWidth = Math.max(50, 200 - scrollY);
    const fontSize = Math.max(((screenWidth<650)? 1 : 1.5), ((screenWidth<768)? 2:3) - scrollY/100); 
  
    return (
        <div 
            style={{
                    height: `${headerHeight}px`,
            }}
            className="fixed top-0 w-full z-50"
        >
            <div  
                className="h-full flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500"
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
                <div className="pl-5 w-fit text-[#FCF6F5] font-bold">
                    <div 
                        style={{
                            fontSize: `${fontSize}rem`
                        }}
                        className="text-center"
                    >
                        National School of Technology, Shillong
                    </div>
                </div> 
            </div>
            <NavBar />
        </div>
    )
}

export default Header