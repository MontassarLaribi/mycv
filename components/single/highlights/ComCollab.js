import { useDispatch } from "react-redux";
import { withTranslation } from "../../../i18n";
import { show } from "../../../store/zoom/zoomSlice";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";
import {
  CenterImage,
  CenterImageDiv,
  Paragraph,
  ShadowBox,
  ShadowBoxContainer,
  ShadowBoxText,
  Article,
  ArticleContentWrapper,
  ArticleImage,
  ArticleImageWrapper,
  ArticleText,
  ArticleTitle,
} from "../../styled/highlights";

const ComCollab = ({ t }) => {
  const dispatch = useDispatch();
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.items.6")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <Paragraph>{t("highlights.comCollab.0")}</Paragraph>
      <ShadowBoxContainer>
        <ShadowBox full={"true"}>
          <CenterImageDiv full={"true"}>
            <CenterImage
              full={"true"}
              onClick={() =>
                dispatch(
                  show({
                    image:
                      "https://montassarlaribi.com/images/espritonlinepayment.png",
                    caption: t("highlights.comCollab.2"),
                  })
                )
              }
              src="https://montassarlaribi.com/images/espritonlinepayment.png"
              alt="ESPRIT Online Payment Banner"
              layout="fill"
            ></CenterImage>
            <ShadowBoxText>{t("highlights.comCollab.2")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox full={"true"}>
          <CenterImageDiv full={"true"}>
            <CenterImage
              full={"true"}
              onClick={() =>
                dispatch(
                  show({
                    image:
                      "https://montassarlaribi.com/images/espritrecrute.png",
                    caption: t("highlights.comCollab.3"),
                  })
                )
              }
              src="https://montassarlaribi.com/images/espritrecrute.png"
              alt="ESPRIT Recrute Banner"
              layout="fill"
            ></CenterImage>
            <ShadowBoxText>{t("highlights.comCollab.3")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
      <Paragraph>{t("highlights.comCollab.1")}</Paragraph>
      <ShadowBoxContainer>
        <Article>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://esprit.tn/actualite/ESPRIT-Recrute"
          >
            <ArticleImageWrapper>
              <ArticleImage
                noinvert={"true"}
                src="https://montassarlaribi.com/images/espritrecrute.png"
                alt="Esprit recrute poster"
                layout="fill"
              ></ArticleImage>
            </ArticleImageWrapper>
            <ArticleContentWrapper>
              <ArticleTitle>{t("seeArticle")}</ArticleTitle>
              <ArticleText>Esprit Recrute</ArticleText>
            </ArticleContentWrapper>
          </a>
        </Article>
      </ShadowBoxContainer>
      <ShadowBoxContainer>
        <Article>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://esprit.tn/actualite/Paiement-en-ligne"
          >
            <ArticleImageWrapper>
              <ArticleImage
                noinvert={"true"}
                src="https://montassarlaribi.com/images/espritonlinepayment.png"
                alt="ESPRIT online poster"
                layout="fill"
              ></ArticleImage>
            </ArticleImageWrapper>
            <ArticleContentWrapper>
              <ArticleTitle>{t("seeArticle")}</ArticleTitle>
              <ArticleText>Paiement en ligne : ESPRIT</ArticleText>
            </ArticleContentWrapper>
          </a>
        </Article>
      </ShadowBoxContainer>
    </>
  );
};
ComCollab.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(ComCollab);
