import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledButton } from './Button.style';

const Button = ({ text, icon, googleBtn, facebookBtn }) => {
  return (
    <StyledButton googleBtn={googleBtn} facebookBtn={facebookBtn}>
      {icon}
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  googleBtn: PropTypes.bool,
  facebookBtn: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.any,
};

export default Button;
