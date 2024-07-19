const Footer = () =>{
    return (
        <div className="text-montserrat flex justify-center h-fit w-full bg-blue-900 bottom-0">
            <div className="text-gray-200 w-full p-5 grid grid-cols-2 sm:w-[600px] sm:grid-cols-3">
                <div>
                    <h1
                        className="text-sm text-center sm:text-lg"
                    >Contact</h1>
                    <ul className="text-xs sm:text-base list-disc pl-12">
                        <li>school@edu.in</li>
                        <li>+91 1234567890</li>
                    </ul>
                </div>
                <div>
                    <h1
                        className="text-sm sm:text-lg text-center"
                    >Social</h1>
                    <ul className="text-xs sm:text-base list-disc pl-12">
                        <li>facebook</li>
                        <li>LinkIn</li>
                        <li>X</li>
                    </ul>
                </div>
                <div>
                    <h1
                        className="text-sm sm:text-lg text-center"
                    >Useful links</h1>
                    <ul className="text-xs sm:text-base list-disc pl-12">
                        <li>Downloads</li>
                        <li>Announcements</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer