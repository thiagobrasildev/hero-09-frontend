import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 75px;
  background-color: #daaaff;
  color: #ffffff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 11px;
  overflow: hidden;

  opacity: 0;
  top: 50px;
  animation: showOnPageCard 0.5s linear forwards;

  small {
    font-size: 16px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 18px;
      font-weight: 400;
    }

    i {
      width: 154px;
      height: 77px;
      position: absolute;
      border-radius: 50px;

      &.circle1 {
        left: 104px;
        top: -20px;
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.3),
          rgba(255, 255, 255, 0.3)
        );
      }

      &.circle2 {
        left: 81px;
        bottom: -50px;
        transform: rotate(45deg);
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.3),
          rgba(255, 255, 255, 0.3)
        );
      }

      &.circle3 {
        border: 1px solid rgba(255, 255, 255, 0.5);
        transform: rotate(-72deg);
        top: -54px;
        left: 47px;
      }
    }

    @keyframes showOnPageCard {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
        top: 105px;
      }
    }
  }
`;
