import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 50%;
    height: 100%;
    max-height: 80vh;
  }

  h1 {
    color: #1255ee;
    font-size: 56px;
    font-weight: bold;
  }

  h6 {
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: 400;
    padding-right: 150px;
    margin-top: 25px;
  }
`;

export const ColummImage = styled.div`
  text-align: right;
  object-fit: contain;
  position: relative;

  img {
    margin-left: 110px;
  }
`;
