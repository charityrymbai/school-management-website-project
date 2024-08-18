import MainContentWrapper from '../Wrappers/MainContentWrapper';
import PropTypes from 'prop-types';
import {
     h1Style,
     pStyle,
} from '../responsive-styles-for-elements/tailwind-styles-exports.js';

const Contact = () => {
     const inputStyle =
          'mb-[15px] p-[10px] rounded-[5px] border border-gray-300';

     return (
          <MainContentWrapper>
               <div className="grid justify-items-center">
                    <div className="overflow-hidden rounded-3xl grid grid-cols-1 w-[95%] md:grid-cols-2 lg:w-[70%]">
                         <div className="p-[30px] bg-[#1e2a38] text-white">
                              <h2 className={h1Style}>Contact Us</h2>
                              <div className={pStyle}>
                                   <p>Always Available in your service...</p>
                                   <br />
                                   <ContactItem>
                                        <Icon>📍</Icon>
                                        <span>
                                             National School of Technology Bijni
                                             Complex, Laitumkhrah
                                             Shillong-793003, Meghalaya, India
                                        </span>
                                   </ContactItem>
                                   <ContactItem>
                                        <Icon>📞</Icon>
                                        <span>+91 1234567890</span>
                                   </ContactItem>
                                   <ContactItem>
                                        <Icon>📧</Icon>
                                        <span>nstm@gmail.com</span>
                                   </ContactItem>
                              </div>
                         </div>
                         <div className="p-[30px] bg-[#fff]">
                              <div className="flex flex-col">
                                   <input
                                        className={inputStyle}
                                        type="text"
                                        placeholder="Full Name"
                                   />
                                   <input
                                        className={inputStyle}
                                        type="email"
                                        placeholder="Email"
                                   />
                                   <textarea
                                        className={inputStyle}
                                        rows={4}
                                        placeholder="Type your message..."
                                   ></textarea>
                                   <button
                                        className="p-[10px] bg-[#4caf50] text-white border-none rounded-[5px] cursor-pointer hover:bg-[#45a049]"
                                        type="submit"
                                   >
                                        Send
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </MainContentWrapper>
     );
};

const ContactItem = ({ children }) => {
     return <div className="mb-[20px] flex items-center">{children}</div>;
};

const Icon = ({ children }) => {
     return <div className="mr-[10px]">{children}</div>;
};

Icon.propTypes = {
     children: PropTypes.string,
};

ContactItem.propTypes = {
     children: PropTypes.node,
};

export default Contact;
