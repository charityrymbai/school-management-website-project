const Footer = () =>{
    return (
        <div className="flex justify-center h-56 w-full bg-blue-900 bottom-0">
            <div className="w-full lg:w-[50%] text-white flex justify-around items-center">
                <div>
                    <h1 className="text-[1.5rem] text-center">Contact</h1>
                    <ul className="list-disc">
                        <li>school@edu.in</li>
                        <li>+91 1234567890</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[1.5rem] text-center">Social</h1>
                    <ul className="list-disc">
                        <li>facebook</li>
                        <li>LinkIn</li>
                        <li>X</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[1.5rem] text-center">Useful links</h1>
                    <ul className="list-disc">
                        <li>Downloads</li>
                        <li>Announcements</li>
                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}

export default Footer