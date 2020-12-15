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
  ShadowBoxText,
  ShadowTable,
  ShadowTableRow,
  ShadowTableColumn,
  LanguageSpan,
  TimeLineSecondary,
  TimeLineSecondaryItem,
  TimeLineSecondaryItemCompany,
  TimeLineSecondaryItemDescription,
  TimeLineSecondaryItemPeriod,
  TimeLineSecondaryItemTitle,
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
function getExperience(t) {
  const items = [];
  for (let index = 0; index < 7; index++) {
    items.push(
      <TimeLineItem>
        <TimeLineLeft>
          <TimeLineLeftTitle>
            {t("experience.items." + index + ".school")}
          </TimeLineLeftTitle>
          <TimeLineLeftPeriod>
            {t("experience.items." + index + ".period")}
          </TimeLineLeftPeriod>
        </TimeLineLeft>
        <TimeLineDivider></TimeLineDivider>
        <TimeLineRight>
          <TimeLineRightTitle>
            {t("experience.items." + index + ".title")}
          </TimeLineRightTitle>
          <TimeLineRightDescription>
            {t("experience.items." + index + ".description")}
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
              <BodyTitle>{t("experience.title")}</BodyTitle>
            </TitleContainerPrimary>
          </BodyTitlesContainer>
          <TimeLine>
            {getExperience(t).map((item, index) => (
              <Fragment key={index}>{item}</Fragment>
            ))}
          </TimeLine>
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
          <BodyTitlesContainer>
            <TitleContainerPrimary>
              <BodyTitle>{t("languages.title")}</BodyTitle>
            </TitleContainerPrimary>
          </BodyTitlesContainer>
          <ShadowBoxContainer>
            <ShadowTable>
              <tbody>
                <ShadowTableRow>
                  <ShadowTableColumn>
                    <LanguageSpan>{t("languages.items.0.name")}</LanguageSpan>
                  </ShadowTableColumn>
                  <ShadowTableColumn>
                    {t("languages.items.0.level")}
                  </ShadowTableColumn>
                </ShadowTableRow>
                <ShadowTableRow>
                  <ShadowTableColumn>
                    <LanguageSpan>{t("languages.items.1.name")}</LanguageSpan>
                  </ShadowTableColumn>
                  <ShadowTableColumn>
                    {t("languages.items.1.level")}
                  </ShadowTableColumn>
                </ShadowTableRow>
                <ShadowTableRow>
                  <ShadowTableColumn>
                    <LanguageSpan>{t("languages.items.2.name")}</LanguageSpan>
                  </ShadowTableColumn>
                  <ShadowTableColumn>
                    {t("languages.items.2.level")}
                  </ShadowTableColumn>
                </ShadowTableRow>
                <ShadowTableRow>
                  <ShadowTableColumn>
                    <LanguageSpan>{t("languages.items.3.name")}</LanguageSpan>
                  </ShadowTableColumn>
                  <ShadowTableColumn>
                    {t("languages.items.3.level")}
                  </ShadowTableColumn>
                </ShadowTableRow>
                <ShadowTableRow>
                  <ShadowTableColumn>
                    <LanguageSpan>{t("languages.items.4.name")}</LanguageSpan>
                  </ShadowTableColumn>
                  <ShadowTableColumn>
                    {t("languages.items.4.level")}
                  </ShadowTableColumn>
                </ShadowTableRow>
              </tbody>
            </ShadowTable>
          </ShadowBoxContainer>
          <BodyTitlesContainer>
            <TitleContainerPrimary>
              <BodyTitle>{t("activities.title")}</BodyTitle>
            </TitleContainerPrimary>
          </BodyTitlesContainer>

          <TimeLineSecondary>
            <TimeLineSecondaryItem>
              <TimeLineSecondaryItemPeriod>
                {t("activities.items.0.period")}
              </TimeLineSecondaryItemPeriod>
              <TimeLineSecondaryItemCompany>
                {t("activities.items.0.school")}
              </TimeLineSecondaryItemCompany>
              <TimeLineSecondaryItemTitle>
                {t("activities.items.0.title")}
              </TimeLineSecondaryItemTitle>
              <TimeLineSecondaryItemDescription>
                {t("activities.items.0.description")}
              </TimeLineSecondaryItemDescription>
            </TimeLineSecondaryItem>
            <TimeLineSecondaryItem>
              <TimeLineSecondaryItemPeriod>
                {t("activities.items.1.period")}
              </TimeLineSecondaryItemPeriod>
              <TimeLineSecondaryItemCompany>
                {t("activities.items.1.school")}
              </TimeLineSecondaryItemCompany>
              <TimeLineSecondaryItemTitle>
                {t("activities.items.1.title")}
              </TimeLineSecondaryItemTitle>
              <TimeLineSecondaryItemDescription>
                {t("activities.items.1.description")}
              </TimeLineSecondaryItemDescription>
            </TimeLineSecondaryItem>
          </TimeLineSecondary>
        </BodySectionColumn>
      </BodySectionFlex>
    </BodySectionContainer>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
