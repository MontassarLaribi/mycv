import styled from "styled-components";
import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";
import {
  Article,
  ArticleContentWrapper,
  ArticleImage,
  ArticleImageWrapper,
  ArticleText,
  ArticleTitle,
  Paragraph,
} from "../../styled/highlights";
import Image from "next/image";

const Maabaadhna = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.items.4")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <Paragraph>{t("highlights.maabaadhna.0")}</Paragraph>
      <ShadowBoxContainer>
        <Article>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://maabaadhna.com/welcome"
          >
            <ArticleImageWrapper>
              <ArticleImage
                noInvert={"true"}
                src="/images/maabaadhna.png"
                alt="Maabaadhna logo"
                layout="fill"
              ></ArticleImage>
            </ArticleImageWrapper>
            <ArticleContentWrapper>
              <ArticleTitle>{t("website")}</ArticleTitle>
              <ArticleText>Maabaadhna</ArticleText>
            </ArticleContentWrapper>
          </a>
        </Article>
      </ShadowBoxContainer>
      <Paragraph>{t("highlights.maabaadhna.1")}</Paragraph>
      <ShadowBoxContainer>
        <ShadowBox>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MontassarLaribi/covid19-front/tree/prod"
          >
            <CenterImageDiv>
              <CenterImage
                invert={"true"}
                src="/images/github.png"
                alt="GitHub Logo"
                layout="fill"
              ></CenterImage>
              <ShadowBoxText>{t("visitGithub")}</ShadowBoxText>
            </CenterImageDiv>
          </a>
        </ShadowBox>
      </ShadowBoxContainer>
    </>
  );
};
Maabaadhna.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Maabaadhna);

const ShadowBox = styled.div`
  width: 50%;
  max-width: 300px;
  position: relative;
  text-align: center;
  display: block;
  margin: 0 10px 15px;
  background: #333;
  padding: 15px 10px 15px;
  border: 2px solid #444;
  border-radius: 10px;
  box-shadow: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
  }
`;
const ShadowBoxContainer = styled.div`
  place-content: center;
  display: flex;
`;
const ShadowBoxText = styled.span`
  font-size: small;
  color: #bdbdbd;
  margin: 10px -30px 0;
`;

const CenterImageDiv = styled.div`
  flex-direction: column;
  position: relative;
  max-width: 125px;
  display: flex;
  margin: auto;
  & > div {
    position: initial !important;
  }
`;
const CenterImage = styled(Image)`
  filter: invert(1);
  width: 100% !important;
  height: 100% !important;
  border-radius: 10px !important;
  max-width: 250px !important;
  position: initial !important;
`;
