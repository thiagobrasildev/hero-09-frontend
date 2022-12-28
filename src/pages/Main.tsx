import ButtonContact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend";
import * as S from "./styles";

import HeroHeaderImage from "../../public/assets/hero-header-image.png";
import CardActivity from "../molecules/CardActivity";

function Main() {
  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user
            experience.
          </h6>
          <ButtonContact />
        </div>
        <S.ColummImage>
          <CardActivity />
          <img src={HeroHeaderImage} alt="Image Hero" />
        </S.ColummImage>
      </S.Container>
    </Frontend>
  );
}

export default Main;
