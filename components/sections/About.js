import { withTranslation } from "../../i18n";
import Activities from "../single/Activities";
import Bio from "../single/Bio";
import Certificats from "../single/Certificats";
import Education from "../single/Education";
import Experience from "../single/Experience";
import Graphic from "../single/Graphic";
import Languages from "../single/Languages";
import Technologies from "../single/Technologies";
import {
  BodySectionColumn,
  BodySectionContainer,
  BodySectionFlex,
  BodySubTitle,
  TitleContainerSecondary,
} from "../styled/body";

const About = ({ t }) => {
  return (
    <BodySectionContainer id="resume">
      <TitleContainerSecondary>
        <BodySubTitle>{t("biography")}</BodySubTitle>
      </TitleContainerSecondary>
      <BodySectionFlex>
        <BodySectionColumn>
          <Bio></Bio>
          <Experience></Experience>
          <Education></Education>
        </BodySectionColumn>
        <BodySectionColumn>
          <Technologies></Technologies>
          <Graphic></Graphic>
          <Certificats></Certificats>
          <Languages></Languages>
          <Activities></Activities>
        </BodySectionColumn>
      </BodySectionFlex>
    </BodySectionContainer>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
