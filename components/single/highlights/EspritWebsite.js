import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";

const EspritWebsite = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.item.2")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
    </>
  );
};
EspritWebsite.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(EspritWebsite);
