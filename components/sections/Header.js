import LanguageToggle from "../single/languageToggle";
import { withTranslation } from "../../i18n";
import {
  HeaderTitleItem,
  HeaderTitleList,
  HeaderWrapper,
  MainTitle,
  MainTitleSmall,
} from "../styled/header";

const Header = ({ t }) => {
  return (
    <HeaderWrapper>
      <MainTitle>
        <a href="#bio">Montassar Laribi</a>
      </MainTitle>
      <MainTitleSmall>
        <a href="#bio">M.L</a>
      </MainTitleSmall>
      <HeaderTitleList>
        <HeaderTitleItem>
          <a href="#resume">{t("header.resume")}</a>
        </HeaderTitleItem>
        <HeaderTitleItem>
          <a href="#highlights">{t("header.highlights")}</a>
        </HeaderTitleItem>
      </HeaderTitleList>
      <LanguageToggle></LanguageToggle>
    </HeaderWrapper>
  );
};
Header.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Header);
