import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import * as S from "./styles";

const CardChart = () => {
  const amountBars = Array.from(Array(12).keys());
  return (
    <S.Container>
      <div>
        <FiArrowLeft />
        <strong>Stats</strong>
        <FiArrowRight />
      </div>
      <S.Chart>
        {amountBars.map((item) => (
          <div key={String(item)}>
            <span></span>
          </div>
        ))}
      </S.Chart>
    </S.Container>
  );
};

export default CardChart;
