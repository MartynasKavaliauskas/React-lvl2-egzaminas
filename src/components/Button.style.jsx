import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 3px;
  width: 240px;
  height: 45px;
  display: flex;
  font-size: 20px;

  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.googleBtn ? '#fff' : props.facebookBtn ? '#4F70B5' : '#fff'};

  color: ${(props) =>
    props.googleBtn ? '#000' : props.facebookBtn ? '#fff' : '#000'};

  border: ${(props) =>
    props.googleBtn
      ? '2px solid #d3d3d3'
      : props.facebookBtn
      ? 'transparent'
      : '2px solid #f4f4f4'};
`;
