import styled from "styled-components";
import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";
import { Paragraph, SpanBox } from "../../styled/highlights";
import Image from "next/image";

const Website = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.items.0")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <Paragraph>{t("highlights.website.0")} </Paragraph>
      <Paragraph>
        {t("highlights.website.1")}
        <SpanBox>
          React Next.JS
        </SpanBox> <SpanBox>Styled-components</SpanBox> <SpanBox>SCSS</SpanBox>{" "}
        <SpanBox>Redux / Redux-Toolkit</SpanBox>{" "}
        <SpanBox>i18n Transalation</SpanBox>
      </Paragraph>
      <Paragraph>
        {t("highlights.website.2")}
        <SpanBox>Jest</SpanBox> <SpanBox>Puppeteer</SpanBox>
      </Paragraph>
      <Paragraph>
        {t("highlights.website.3")}
        <SpanBox>Docker</SpanBox> <SpanBox>Jenkins</SpanBox>{" "}
        <SpanBox>Ubuntu</SpanBox>
      </Paragraph>
      <ShadowBoxContainer>
        <ShadowBox>
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MontassarLaribi/mycv"
          >
            <CenterImageDiv>
              <CenterImage
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
Website.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Website);

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
  width: 100%;
  align-self: center;
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
