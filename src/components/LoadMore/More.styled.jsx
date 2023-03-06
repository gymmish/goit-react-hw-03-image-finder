import styled from '@emotion/styled';

export const Button = styled.button`
  width: 150px;
  height: 30px;
  color: white;
  display: inline-block;
  margin-top: 20px;
  background-color: cornflowerblue;
  border-radius: 5px;
  border: none;
  outline: none;

  :hover {
    box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;
