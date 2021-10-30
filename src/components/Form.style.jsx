import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  width: 510px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledFormTitle = styled.div`
  width: 100%;
  margin-top: -120px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    font-weight: 450;
  }
`;

export const StyledP = styled.p`
  margin-top: -15px;
`;

export const StyledPLogin = styled.p`
  margin-top: -10px;
  color: #f2877d;
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledOrContainer = styled.div`
  margin: 0 auto;

  h2 {
    font-weight: 400;
  }
`;

export const StyledFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputContainer = styled.div`
  width: 100%;

  span {
    position: absolute;
    margin: 0 auto;
  }
  input {
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    width: 92%;
    height: 35px;
    padding-left: 35px;
    margin-bottom: 20px;
    margin-top: 15px;

    :focus {
      outline-color: #f2877d;
    }
  }
`;

export const StyledSubmit = styled.input`
  border: none;
  height: 36px;
  border-radius: 5px;
  width: 100%;
  background-color: #f2877d;
  color: #fff;
  font-size: 20px;
`;
