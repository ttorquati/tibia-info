import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  max-width: 700px;
  padding: 0;
  margin: 0 auto;
  flex: 1;
  padding: 10px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      max-height: 60px;
      margin: 0 auto;
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.isError ? '#f33' : '#eee')};
    padding: 15px 25px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 18px;
    color: ${darken('0.1', '#6c82af')};
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 0ch;
  padding: 0 30px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #b2b6ce;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    cursor: pointer;
    background: ${darken('0.1', '#b2b6ce')};
  }
`;

export const ErrorMessage = styled.span`
  line-height: 2;
  padding-left: 4px;
  padding-top: 4px;
  color: #fff;
`;
