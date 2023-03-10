import { FiArrowUp } from "react-icons/fi";
import * as S from "./styles";

const CardActivity = () => {
  return (
    <S.Container>
      <small>Activity</small>
      <div>
        <span>18</span>
        <FiArrowUp size={20} color="#ffffff" />

        <i className="circle1"></i>
        <i className="circle2"></i>
        <i className="circle3"></i>
      </div>
    </S.Container>
  );
};

export default CardActivity;
