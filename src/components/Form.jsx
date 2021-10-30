import React from 'react';
import Button from './Button';

import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

// Styles
import styled from 'styled-components';

import {
  StyledFormWrapper,
  StyledFormTitle,
  StyledP,
  StyledPLogin,
  StyledButtonWrapper,
  StyledOrContainer,
  StyledFormContainer,
  StyledForm,
  StyledInputWrapper,
  StyledInputContainer,
  StyledSubmit,
} from './Form.style';

const StyledGoogle = styled(FcGoogle)`
  margin-right: 10px;
`;
const StyledFacebook = styled(BsFacebook)`
  margin-right: 10px;
`;

const StyledUserIcon = styled(FaRegUser)`
  font-size: 20px;
  margin-top: 25px;
  margin-left: 10px;
`;
const StyledMailIcon = styled(AiOutlineMail)`
  font-size: 20px;
  margin-top: 25px;
  margin-left: 10px;
`;
const StyledLockIcon = styled(AiOutlineLock)`
  font-size: 20px;
  margin-top: 25px;
  margin-left: 10px;
`;

const Form = () => {
  return (
    <StyledFormWrapper>
      <StyledFormTitle>
        <h1>Get Started</h1>
        <StyledP>Already have an account?</StyledP>
        <StyledPLogin>Log in</StyledPLogin>
      </StyledFormTitle>
      <StyledButtonWrapper>
        <Button text=' sign up' icon={<StyledGoogle />} googleBtn />
        <Button text='sign up' icon={<StyledFacebook />} facebookBtn />
      </StyledButtonWrapper>
      <StyledOrContainer>
        <h2>Or</h2>
      </StyledOrContainer>
      <StyledFormContainer>
        <StyledForm>
          <StyledInputWrapper>
            <label htmlFor='name'>Name</label>
            <StyledInputContainer>
              <span>
                <StyledUserIcon />
              </span>
              <input type='text' id='name' placeholder='Jay Shaheb' />
            </StyledInputContainer>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor='email'>Email</label>
            <StyledInputContainer>
              <span>
                <StyledMailIcon />
              </span>
              <input type='text' id='email' placeholder='abc@gmail.com' />
            </StyledInputContainer>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <label htmlFor='password'>Password</label>
            <StyledInputContainer>
              <span>
                <StyledLockIcon />
              </span>
              <input type='password' id='password' placeholder='Password' />
            </StyledInputContainer>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledSubmit type='submit' value='Submit' />
          </StyledInputWrapper>
        </StyledForm>
      </StyledFormContainer>
    </StyledFormWrapper>
  );
};

export default Form;
