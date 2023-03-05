import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: cornflowerblue;
  height: 60px;
`;

export const InputForm = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-right: 15px;
  :hover {
    box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);
  }
`;

export const SearchBut = styled.button`
  width: 70px;
  height: 30px;

  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  :hover {
    box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);
  }
`;
