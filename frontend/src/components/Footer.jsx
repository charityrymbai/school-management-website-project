const Footer = () =>{
    return (
        <div className="flex justify-center h-fit w-full bg-blue-900 bottom-0">
            <div className="text-sm text-gray-200 font-thin w-full p-5 grid content-center grid-cols-2 sm:w-[600px] sm:grid-cols-3">
                <div>
                    <h1
                        className="text-lg text-center"
                    >Contact</h1>
                    <ul className="list-disc pl-12">
                        <li>school@edu.in</li>
                        <li>+91 1234567890</li>
                    </ul>
                </div>
                <div>
                    <h1
                        className="text-lg text-center"
                    >Social</h1>
                    <ul className="list-disc pl-12">
                        <li>facebook</li>
                        <li>LinkIn</li>
                        <li>X</li>
                    </ul>
                </div>
                <div>
                    <h1
                        className="text-lg text-center"
                    >Useful links</h1>
                    <ul className="list-disc pl-12">
                        <li>Downloads</li>
                        <li>Announcements</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer