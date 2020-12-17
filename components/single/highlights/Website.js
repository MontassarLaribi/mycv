import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";

const Website = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.item.0")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
    </>
  );
};
Website.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Website);
