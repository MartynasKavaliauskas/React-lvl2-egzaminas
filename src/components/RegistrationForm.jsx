import React from 'react';
import Form from './Form';

// Styles
import {
  RegistrationFromWrapper,
  StyledLeftContainer,
  StyledLogoWrapper,
  StyledBackgroundImg,
  StyledTitleUnderBgImg,
  Wrapper,
  FromWrapper,
} from './RegistrationForm.style';

const RegistrationForm = () => {
  return (
    <>
      <Wrapper>
        <RegistrationFromWrapper>
          <StyledLeftContainer>
            <StyledLogoWrapper>
              <img
                src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
                alt='B'
              />
            </StyledLogoWrapper>
            <StyledBackgroundImg>
              <img
                src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
                alt='background'
              />
            </StyledBackgroundImg>
            <StyledTitleUnderBgImg>
              <p>Start for free & Get Attractive offers Today !</p>
            </StyledTitleUnderBgImg>
          </StyledLeftContainer>

          <FromWrapper>
            <Form />
          </FromWrapper>
        </RegistrationFromWrapper>
      </Wrapper>
    </>
  );
};

export default RegistrationForm;
