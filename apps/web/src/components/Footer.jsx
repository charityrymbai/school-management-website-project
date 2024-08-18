import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
     return (
          <div className="text-montserrat flex justify-center h-fit w-full bg-blue-900 bottom-0">
               <div className="text-gray-200 w-full p-5 grid grid-cols-2 sm:w-[600px] sm:grid-cols-3">
                    <div>
                         <h1 className="text-sm text-center sm:text-lg font-bold">
                              Contact
                         </h1>
                         <ul className="text-xs sm:text-base list-none pl-0 text-center">
                              <li>nstm@gmail.com</li>
                              <li>+91 1234567890</li>
                         </ul>
                    </div>
                    <div>
                         <h1 className="text-sm sm:text-lg text-center font-bold">
                              Social
                         </h1>
                         <ul className="flex justify-center space-x-4 mt-2">
                              <li className="social-icon">
                                   <FaFacebookF />
                              </li>
                              <li className="social-icon">
                                   <FaLinkedinIn />
                              </li>
                              <li className="social-icon">
                                   <FaTwitter />
                              </li>
                         </ul>
                    </div>
                    <div>
                         <h1 className="text-sm sm:text-lg text-center font-bold">
                              Useful links
                         </h1>
                         <ul className="text-xs sm:text-base list-none pl-0 text-center">
                              <li>Downloads</li>
                              <li>Announcements</li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
