import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";
import {
  Paragraph,
  ShadowBoxContainer,
  ArticleTitle,
  ArticleText,
  ArticleImageWrapper,
  ArticleImage,
  ArticleContentWrapper,
  Article,
} from "../../styled/highlights";

const Placini = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.items.5")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <Paragraph>{t("highlights.placini.0")}</Paragraph>
      <Paragraph>{t("highlights.placini.1")}</Paragraph>
      <ShadowBoxContainer>
        <Article>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=placini.ionic.app&hl=en"
          >
            <ArticleImageWrapper>
              <ArticleImage
                noinvert={"true"}
                src="https://montassarlaribi.com/images/googleplay.png"
                alt="Maabaadhna logo"
                layout="fill"
              ></ArticleImage>
            </ArticleImageWrapper>
            <ArticleContentWrapper>
              <ArticleTitle>Placini - CSO</ArticleTitle>
              <ArticleText>{t("googleStore")}</ArticleText>
            </ArticleContentWrapper>
          </a>
        </Article>
      </ShadowBoxContainer>
    </>
  );
};
Placini.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Placini);
