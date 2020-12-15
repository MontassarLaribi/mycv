import { Fragment } from "react";
import { withTranslation } from "../../i18n";
import {
  BodySubTitle,
  BodyTitle,
  TitleContainerPrimary,
  TitleContainerSecondary,
  BodyTitlesContainer,
  BodySectionContainer,
  BodySectionColumn,
  BodySectionFlex,
  SkillsList,
  SkillsListItem,
  TimeLine,
  TimeLineItem,
  TimeLineLeft,
  TimeLineLeftTitle,
  TimeLineLeftPeriod,
  TimeLineDivider,
  TimeLineRight,
  TimeLineRightTitle,
  TimeLineRightDescription,
  ShadowBox,
  ShadowBoxContainer,
  CenterImage,
  CenterImageDiv,
} from "../styled/body";
import { ResumeDescription } from "../styled/components";

function getEducation(t) {
  const items = [];
  for (let index = 0; index < 4; index++) {
    items.push(
      <TimeLineItem>
        <TimeLineLeft>
          <TimeLineLeftTitle>
            {t("education.items." + index + ".school")}
          </TimeLineLeftTitle>
          <TimeLineLeftPeriod>
            {t("education.items." + index + ".period")}
          </TimeLineLeftPeriod>
        </TimeLineLeft>
        <TimeLineDivider></TimeLineDivider>
        <TimeLineRight>
          <TimeLineRightTitle>
            {t("education.items." + index + ".title")}
          </TimeLineRightTitle>
          <TimeLineRightDescription>
            {t("education.items." + index + ".description")}
          </TimeLineRightDescription>
        </TimeLineRight>
      </TimeLineItem>
    );
  }
  return items;
}

const About = ({ t }) => {
  return (
    <BodySectionContainer>
      <TitleContainerSecondary>
        <BodySubTitle>{t("biography")}</BodySubTitle>
      </TitleContainerSecondary>
      <BodySectionFlex>
        <BodySectionColumn>
          <BodyTitlesContainer>
            <TitleContainerPrimary>
              <BodyTitle>{t("aboutMe")}</BodyTitle>
            </TitleContainerPrimary>
          </BodyTitlesContainer>
          <ResumeDescription>{t("bioDescription")}</ResumeDescription>
          <BodyTitlesContainer>
            <TitleContainerPrimary>
              <BodyTitle>{t("education.title")}</BodyTitle>
            </TitleContainerPrimary>
          </BodyTitlesContainer>
          <TimeLine>
            {getEducation(t).map((item, index) => (
              <Fragment key={index}>{item}</Fragment>
            ))}
          </TimeLine>
        </BodySectionColumn>
        <BodySectionColumn>
          <BodyTitlesContainer>
            <TitleContainerPrimary>
              <BodyTitle>{t("technologies")}</BodyTitle>
            </TitleContainerPrimary>
          </BodyTitlesContainer>
          <ResumeDescription>{t("technologiesIUse")}</ResumeDescription>
          <SkillsList>
            <SkillsListItem>React.JS (CRA/NextJS)</SkillsListItem>
            <SkillsListItem>Nest.JS</SkillsListItem>
            <SkillsListItem>Node.JS</SkillsListItem>
            <SkillsListItem>MongoDB</SkillsListItem>
            <SkillsListItem>Jenkins</SkillsListItem>
            <SkillsListItem>Ubuntu</SkillsListItem>
            <SkillsListItem>Git</SkillsListItem>
            <SkillsListItem>SSR</SkillsListItem>
            <SkillsListItem>Puppeteer</SkillsListItem>
            <SkillsListItem>Swagger</SkillsListItem>
            <SkillsListItem>SCSS/SASS</SkillsListItem>
            <SkillsListItem>JavaScript</SkillsListItem>
            <SkillsListItem>TypeScript</SkillsListItem>
            <SkillsListItem>CI/CD</SkillsListItem>
            <SkillsListItem>SQL</SkillsListItem>
            <SkillsListItem>Symfony</SkillsListItem>
          </SkillsList>
          <BodyTitlesContainer>
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
        </BodySectionColumn>
      </BodySectionFlex>
    </BodySectionContainer>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
