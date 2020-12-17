import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";

const ComCollab = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.item.6")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
    </>
  );
};
ComCollab.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(ComCollab);
