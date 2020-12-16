import { withTranslation } from "../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  CenterImage,
  CenterImageDiv,
  ShadowBox,
  ShadowBoxContainer,
  ShadowBoxText,
  TitleContainerPrimary,
} from "../styled/body";

const Certificats = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer>
        <TitleContainerPrimary>
          <BodyTitle>{t("certificats.title")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <ShadowBoxContainer>
        <ShadowBox>
          <CenterImageDiv>
            <CenterImage src="/images/PNL_Montassar_Laribi.png"></CenterImage>
            <ShadowBoxText>{t("certificats.items.0")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox>
          <CenterImageDiv>
            <CenterImage src="/images/Soft_Skills_Montassar_Laribi.png"></CenterImage>
            <ShadowBoxText>{t("certificats.items.1")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
      <ShadowBoxContainer>
        <ShadowBox>
          <CenterImageDiv>
            <CenterImage src="/images/TOT_Montassar_Laribi.png"></CenterImage>
            <ShadowBoxText>{t("certificats.items.2")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox>
          <CenterImageDiv>
            <CenterImage src="/images/MOOC_Montassar_Laribi.png"></CenterImage>
            <ShadowBoxText>{t("certificats.items.3")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
    </>
  );
};
Certificats.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Certificats);
