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
} from "../styled/body";
import { ResumeDescription } from "../styled/components";

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
            <SkillsListItem>Node.JS</SkillsListItem>
            <SkillsListItem>MongoDB</SkillsListItem>
            <SkillsListItem>Jenkins</SkillsListItem>
            <SkillsListItem>Git</SkillsListItem>
            <SkillsListItem>SSR</SkillsListItem>
            <SkillsListItem>Puppeteer</SkillsListItem>
            <SkillsListItem>SCSS/SASS</SkillsListItem>
            <SkillsListItem>JavaScript</SkillsListItem>
            <SkillsListItem>TypeScript</SkillsListItem>
            <SkillsListItem>CI/CD</SkillsListItem>
            <SkillsListItem>SQL</SkillsListItem>
            <SkillsListItem>Symfony</SkillsListItem>
          </SkillsList>
        </BodySectionColumn>
      </BodySectionFlex>
    </BodySectionContainer>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
