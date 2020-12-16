import { withTranslation } from "../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  SkillsList,
  SkillsListItem,
  TitleContainerPrimary,
} from "../styled/body";
import { ResumeDescription } from "../styled/components";

const Technologies = ({ t }) => {
  return (
    <>
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
    </>
  );
};
Technologies.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Technologies);
