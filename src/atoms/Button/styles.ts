import styled from "styled-components";

export const Container = styled.button`
  width: 130px;
  height: 42px;
  border: solid 1px #17a4d0;
  color: #17a4d0;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  box-shadow: 0px 0px 17px -8px transparent;
  margin-left: 25px;
  transition: all 0.25s ease-out;

  &:hover {
    color: #ffffff;
    background-color: #17a4d0;
    box-shadow: 0px 0px 17px -5px #17a4d0;
  }
`;
