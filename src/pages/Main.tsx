import Frontend from "../templates/Frontend";
import * as S from "./styles";

import ProductInformation from "../organisms/ProductInformation";
import ProductStatus from "../organisms/ProductStatus";

function Main() {
  return (
    <Frontend>
      <S.Container>
        <ProductInformation />
        <ProductStatus />
      </S.Container>
    </Frontend>
  );
}

export default Main;
