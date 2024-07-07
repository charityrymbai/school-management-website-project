import NavigatePageLink from './NavigatePageLink'

const NavBar = ()=>{
    return (
        <div>
            <nav className="flex justify-around h-12 bg-yellow-500">
                <ul className="w-full md:w-[50%] flex justify-around py-3">
                    <NavigatePageLink gotopage="/">Home</NavigatePageLink>
                    <NavigatePageLink gotopage="/About">About</NavigatePageLink>
                    <NavigatePageLink gotopage="/Login">Login</NavigatePageLink>
                    <NavigatePageLink gotopage="/Contact">Contact</NavigatePageLink>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar