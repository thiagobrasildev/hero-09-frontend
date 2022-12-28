import CardActivity from "../../molecules/CardActivity";
import * as S from "./styles";
import HeroHeaderImage from "../../../public/assets/hero-header-image.png";
import CardChart from "../../molecules/CardChart";

const ProductStatus = () => {
  return (
    <S.Container>
      <CardActivity />
      <CardChart />
      <img src={HeroHeaderImage} alt="Image Hero" />
    </S.Container>
  );
};

export default ProductStatus;
