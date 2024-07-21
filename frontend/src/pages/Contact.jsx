import React from 'react';
import MainContentWrapper from '../components/MainContentWrapper.js';
import ContactContainer from '../components/ContactContainer.js';
import InfoSection from '../components/InfoSection.js';
import FormSection from '../components/FormSection.js';
import ContactItem from '../components/ContactItem.js';
import Icon from '../components/Icon.js';
import Form from '../components/Form.js';
import Input from '../components/Input.js';
import TextArea from '../components/TextArea.js';
import Button from '../components/Button.js';

const Contact = () => {
    return (
        <MainContentWrapper>
            <ContactContainer>
                <InfoSection>
                    <h2 className="my-20 text-5xl font-bold">Contact Us</h2>
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
            </ContactContainer>
        </MainContentWrapper>
    );
};

export default Contact;
