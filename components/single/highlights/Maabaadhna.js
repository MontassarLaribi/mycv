import { withTranslation } from "../../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";

const Maabaadhna = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.item.4")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
    </>
  );
};
Maabaadhna.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Maabaadhna);
