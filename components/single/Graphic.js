import { withTranslation } from "../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  CenterImage,
  CenterImageDiv,
  ShadowBox,
  ShadowBoxContainer,
  TitleContainerPrimary,
} from "../styled/body";

const Graphic = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("graphic")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <ShadowBoxContainer>
        <ShadowBox>
          <CenterImageDiv>
            <CenterImage src="/images/photoshop.png"></CenterImage>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox>
          <CenterImageDiv>
            <CenterImage src="/images/illustrator.png"></CenterImage>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
    </>
  );
};
Graphic.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Graphic);
