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
  SpanBox,
  ShadowBox,
  ShadowBoxText,
  ShadowBoxContainer,
  Article,
  ArticleContentWrapper,
  ArticleImage,
  ArticleImageWrapper,
  ArticleText,
  ArticleTitle,
  CenterImage,
  CenterImageDiv,
} from "../../styled/highlights";

const EspritWebsite = ({ t }) => {
  const dispatch = useDispatch();

  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.items.2")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <Paragraph>{t("highlights.espritWebsite.0")}</Paragraph>
      <Paragraph>{t("highlights.espritWebsite.1")}</Paragraph>
      <Paragraph>
        {t("highlights.espritWebsite.2")}
        <SpanBox>Lazy Loading</SpanBox>
        <SpanBox>Precompression</SpanBox>
        <SpanBox>Request Compression</SpanBox>
        <SpanBox>Image optimizations</SpanBox>
        <SpanBox>Request Caching</SpanBox>
      </Paragraph>
      <Paragraph>{t("highlights.espritWebsite.3")}</Paragraph>
      <ShadowBoxContainer>
        <ShadowBox full={true}>
          <CenterImageDiv full={true}>
            <CenterImage
              full={true}
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/pagespeed1.png",
                    caption: t("before"),
                  })
                )
              }
              src="/images/pagespeed1.png"
              alt="ESPRIT Website Before"
            ></CenterImage>
            <ShadowBoxText>{t("before")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
        <ShadowBox full={true}>
          <CenterImageDiv full={true}>
            <CenterImage
              full={true}
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/pagespeed2.png",
                    caption: t("after"),
                  })
                )
              }
              src="/images/pagespeed2.png"
              alt="ESPRIT Website After"
            ></CenterImage>
            <ShadowBoxText>{t("after")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
      <ShadowBoxContainer>
        <ShadowBox>
          <CenterImageDiv>
            <CenterImage
              onClick={() =>
                dispatch(
                  show({
                    image: "/images/pagespeed5.png",
                    caption: t("best"),
                  })
                )
              }
              src="/images/pagespeed5.png"
              alt="ESPRIT Website 100% score"
            ></CenterImage>
            <ShadowBoxText>{t("best")}</ShadowBoxText>
          </CenterImageDiv>
        </ShadowBox>
      </ShadowBoxContainer>
      <Paragraph>{t("highlights.espritWebsite.4")}</Paragraph>
      <ShadowBoxContainer>
        <Article>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@mohammedmontassarlaribi/adding-ssr-to-my-cra-app-using-puppeteer-fbab4226cf8e"
          >
            <ArticleImageWrapper>
              <ArticleImage
                src="/images/medium.png"
                alt="medium logo"
              ></ArticleImage>
            </ArticleImageWrapper>
            <ArticleContentWrapper>
              <ArticleTitle>{t("readArticle")}</ArticleTitle>
              <ArticleText>
                Adding SSR to my CRA app using Puppeteer
              </ArticleText>
            </ArticleContentWrapper>
          </a>
        </Article>
      </ShadowBoxContainer>
    </>
  );
};
EspritWebsite.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(EspritWebsite);
