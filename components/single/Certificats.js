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
        <ShadowBox
          id="pnl"
          onClick={() =>
            dispatch(
              show({
                image:
                  "https://montassarlaribi.com/images/PNL_Montassar_Laribi.png",
                caption: t("certificats.items.0"),
              })
            )
          }
          zoomable={true}
        >
          <CenterImageDiv id="scroll-pnl">
            <CenterImage
              alt="Certificat PNL Montassar Laribi"
              src="https://montassarlaribi.com/images/PNL_Montassar_Laribi.png"
              layout="fill"
            ></CenterImage>
          </CenterImageDiv>
          <ShadowBoxText>{t("certificats.items.0")}</ShadowBoxText>
        </ShadowBox>
        <ShadowBox
          onClick={() =>
            dispatch(
              show({
                image:
                  "https://montassarlaribi.com/images/Soft_Skills_Montassar_Laribi.png",
                caption: t("certificats.items.1"),
              })
            )
          }
          zoomable={true}
        >
          <CenterImageDiv>
            <CenterImage
              alt="Certificat Soft Skills Montassar Laribi"
              src="https://montassarlaribi.com/images/Soft_Skills_Montassar_Laribi.png"
              layout="fill"
            ></CenterImage>
          </CenterImageDiv>
          <ShadowBoxText>{t("certificats.items.1")}</ShadowBoxText>
        </ShadowBox>
      </ShadowBoxContainer>
      <ShadowBoxContainer>
        <ShadowBox
          onClick={() =>
            dispatch(
              show({
                image:
                  "https://montassarlaribi.com/images/TOT_Montassar_Laribi.png",
                caption: t("certificats.items.2"),
              })
            )
          }
          zoomable={true}
        >
          <CenterImageDiv>
            <CenterImage
              alt="Certificat TOT Montassar Laribi"
              src="https://montassarlaribi.com/images/TOT_Montassar_Laribi.png"
              layout="fill"
            ></CenterImage>
          </CenterImageDiv>
          <ShadowBoxText>{t("certificats.items.2")}</ShadowBoxText>
        </ShadowBox>
        <ShadowBox
          onClick={() =>
            dispatch(
              show({
                image:
                  "https://montassarlaribi.com/images/MOOC_Montassar_Laribi.png",
                caption: t("certificats.items.3"),
              })
            )
          }
          zoomable={true}
        >
          <CenterImageDiv>
            <CenterImage
              alt="Certificat MOOC Montassar Laribi"
              src="https://montassarlaribi.com/images/MOOC_Montassar_Laribi.png"
              layout="fill"
            ></CenterImage>
          </CenterImageDiv>
          <ShadowBoxText>{t("certificats.items.3")}</ShadowBoxText>
        </ShadowBox>
      </ShadowBoxContainer>
    </>
  );
};
Certificats.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Certificats);
