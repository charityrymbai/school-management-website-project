import React from 'react';
import MainContentWrapper from "../Wrappers/MainContentWrapper"
import InfoSection from '../components/InfoSection.js';
import FormSection from '../components/FormSection.js';
import ContactItem from '../components/ContactItem.js';
import Icon from '../components/Icon.js';
import Form from '../components/Form.js';
import Input from '../components/Input.js';
import TextArea from '../components/TextArea.js';
import Button from '../components/Button.js';
import { h1Style, pStyle } from '../responsive-styles-for-elements/tailwind-styles-exports.js';

const Contact = () => {
    return (
        <MainContentWrapper>
            <div className='grid justify-items-center'>
                <div className='overflow-hidden rounded-3xl grid grid-cols-1 w-[95%] md:grid-cols-2 lg:w-[70%]'>
                    <InfoSection>
                        <h2 className={h1Style}>Contact Us</h2>
                        <div className={pStyle}>
                            <p>Always Available in your service...</p>
                            <br />
                            <ContactItem>
                                <Icon>📍</Icon>
                                <span>
                                    National School of Technology Bijni Complex,
                                    Laitumkhrah Shillong-793003, Meghalaya, India
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
                    </InfoSection>
                    <FormSection>
                        <Form>
                            <Input type="text" placeholder="Full Name" />
                            <Input type="email" placeholder="Email" />
                            <TextArea
                                rows="4"
                                placeholder="Type your message..."
                            ></TextArea>
                            <Button type="submit">Send</Button>
                        </Form>
                    </FormSection>
                </div>
            </div>
        </MainContentWrapper>
    );
};

export default Contact;
