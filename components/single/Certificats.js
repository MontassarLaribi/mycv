import { useDispatch } from "react-redux";
import { withTranslation } from "../../i18n";
import { show } from "../../store/zoom/zoomSlice";
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
  const dispatch = useDispatch();

  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("certificats.title")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <ShadowBoxContainer>
        <ShadowBox zoomable={true}>
          <CenterImageDiv>
            <CenterImage
              id="pnl"
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/PNL_Montassar_Laribi.png",
                    caption: t("certificats.items.0"),
                  })
                )
              }
              src="/images/PNL_Montassar_Laribi.png"
            ></CenterImage>
            <ShadowBoxText>{t("certificats.items.0")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox zoomable={true}>
          <CenterImageDiv>
            <CenterImage
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/Soft_Skills_Montassar_Laribi.png",
                    caption: t("certificats.items.1"),
                  })
                )
              }
              src="/images/Soft_Skills_Montassar_Laribi.png"
            ></CenterImage>
            <ShadowBoxText>{t("certificats.items.1")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
      <ShadowBoxContainer>
        <ShadowBox zoomable={true}>
          <CenterImageDiv>
            <CenterImage
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/TOT_Montassar_Laribi.png",
                    caption: t("certificats.items.2"),
                  })
                )
              }
              src="/images/TOT_Montassar_Laribi.png"
            ></CenterImage>
            <ShadowBoxText>{t("certificats.items.2")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox zoomable={true}>
          <CenterImageDiv>
            <CenterImage
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/MOOC_Montassar_Laribi.png",
                    caption: t("certificats.items.3"),
                  })
                )
              }
              src="/images/MOOC_Montassar_Laribi.png"
            ></CenterImage>
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
