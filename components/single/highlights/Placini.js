import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";

const Placini = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.item.5")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
    </>
  );
};
Placini.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Placini);
