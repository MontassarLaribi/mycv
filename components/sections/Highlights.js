import { withTranslation } from "../../i18n";
import ComCollab from "../single/highlights/ComCollab";
import EspritWebsite from "../single/highlights/EspritWebsite";
import LinkedIn from "../single/highlights/LinkedIn";
import Maabaadhna from "../single/highlights/Maabaadhna";
import Placini from "../single/highlights/Placini";
import Teaching from "../single/highlights/Teaching";
import Website from "../single/highlights/Website";
import {
  BodySectionColumn,
  BodySectionContainer,
  BodySectionFlex,
  BodySubTitle,
  TitleContainerSecondary,
} from "../styled/body";

const Highlights = ({ t }) => {
  return (
    <BodySectionContainer id="highlights">
      <TitleContainerSecondary>
        <BodySubTitle>{t("highlights.title")}</BodySubTitle>
      </TitleContainerSecondary>
      <BodySectionFlex>
        <BodySectionColumn full={true}>
          <Website></Website>
          <LinkedIn></LinkedIn>
          <EspritWebsite></EspritWebsite>
          <Teaching></Teaching>
          <Maabaadhna></Maabaadhna>
          <Placini></Placini>
          <ComCollab></ComCollab>
        </BodySectionColumn>
      </BodySectionFlex>
    </BodySectionContainer>
  );
};

Highlights.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Highlights);
