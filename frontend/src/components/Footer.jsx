const Footer = () =>{
    return (
        <div className="flex justify-center h-fit w-full bg-blue-900 bottom-0">
            <div className="w-full p-5 grid content-center grid-cols-2 sm:w-fit sm:grid-cols-3 text-white">
                <div>
                    <h1>Contact</h1>
                    <ul className="list-disc p-5">
                        <li>school@edu.in</li>
                        <li>+91 1234567890</li>
                    </ul>
                </div>
                <div>
                    <h1>Social</h1>
                    <ul className="list-disc p-5">
                        <li>facebook</li>
                        <li>LinkIn</li>
                        <li>X</li>
                    </ul>
                </div>
                <div>
                    <h1>Useful links</h1>
                    <ul className="list-disc p-5">
                        <li>Downloads</li>
                        <li>Announcements</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer