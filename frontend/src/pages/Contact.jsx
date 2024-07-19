import React from 'react';
import styled from 'styled-components';

  
const MainContentWrapper = styled.div`
  margin-top : 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #1e2a38;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
  max-width: 800px;
  width: 100%;
`;

const InfoSection = styled.div`
  padding: 30px;
  color: #fff;
  background: #1e2a38;
  width: 50%;
`;

const FormSection = styled.div`
  padding: 30px;
  background: #fff;
  width: 50%;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

const Contact = () => {
  return (
    <MainContentWrapper >
      <ContactContainer >
        <InfoSection >
          <h2 className='my-20 text-5xl font-bold' >Contact Us</h2>
          <p>Always Availible in your service... </p>
          <br />
          <ContactItem>
            <Icon>📍</Icon>
            <span>National School of Technology 
Bijni Complex, Laitumkhrah
Shillong-793003, Meghalaya, India</span>
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
            <TextArea rows="4" placeholder="Type your message..."></TextArea>
            <Button type="submit">Send</Button>
          </Form>
        </FormSection>
      </ContactContainer>
    </MainContentWrapper>
  );
}

export default Contact;
