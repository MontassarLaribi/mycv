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
              <BodyTitle>{t("aboutMe")}</BodyTitle>
            </TitleContainerPrimary>
          </BodyTitlesContainer>
          <ResumeDescription>{t("bioDescription")}</ResumeDescription>
        </BodySectionColumn>
      </BodySectionFlex>
    </BodySectionContainer>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
