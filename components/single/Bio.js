import { withTranslation } from "../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../styled/body";
import { ResumeDescription } from "../styled/components";

const Bio = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer>
        <TitleContainerPrimary>
          <BodyTitle>{t("aboutMe")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <ResumeDescription>{t("bioDescription")}</ResumeDescription>
    </>
  );
};
Bio.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Bio);
