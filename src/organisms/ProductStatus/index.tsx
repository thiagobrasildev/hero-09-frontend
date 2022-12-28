import CardActivity from "../../molecules/CardActivity";
import * as S from "./styles";
import HeroHeaderImage from "../../../public/assets/hero-header-image.png";

const ProductStatus = () => {
  return (
    <S.Container>
      <CardActivity />
      <img src={HeroHeaderImage} alt="Image Hero" />
    </S.Container>
  );
};

export default ProductStatus;
