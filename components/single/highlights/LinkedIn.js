import { useDispatch } from "react-redux";
import { withTranslation } from "../../../i18n";
import { show } from "../../../store/zoom/zoomSlice";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";
import {
  Paragraph,
  ShadowBoxContainer,
  ShadowBoxText,
  ShadowBox,
  CenterImageDiv,
  CenterImage,
} from "../../styled/highlights";

const LinkedIn = ({ t }) => {
  const dispatch = useDispatch();
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.items.1")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <Paragraph>{t("highlights.linkedIn.0")}</Paragraph>
      <ShadowBoxContainer>
        <ShadowBox full={true}>
          <CenterImageDiv full={true}>
            <CenterImage
              full={true}
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/linkedInReact.png",
                    caption: t("highlights.linkedIn.1"),
                  })
                )
              }
              src="/images/linkedInReact.png"
              alt="React LinkedIn Badge"
            ></CenterImage>
            <ShadowBoxText>{t("highlights.linkedIn.1")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox full={true}>
          <CenterImageDiv full={true}>
            <CenterImage
              full={true}
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/linkedInJavascript.png",
                    caption: t("highlights.linkedIn.2"),
                  })
                )
              }
              src="/images/linkedInJavascript.png"
              alt="Javascript LinkedIn Badge"
            ></CenterImage>
            <ShadowBoxText>{t("highlights.linkedIn.2")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
    </>
  );
};
LinkedIn.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(LinkedIn);