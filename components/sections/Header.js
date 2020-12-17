import LanguageToggle from "../single/languageToggle";
import {
  HeaderTitleItem,
  HeaderTitleList,
  HeaderWrapper,
  MainTitle,
} from "../styled/header";

export default function Header() {
  return (
    <HeaderWrapper>
      <MainTitle>Montassar Laribi</MainTitle>
      <HeaderTitleList>
        <HeaderTitleItem>
          <a href="#resume">Resume</a>
        </HeaderTitleItem>
        <HeaderTitleItem>
          <a href="#highlights">Highlights</a>
        </HeaderTitleItem>
      </HeaderTitleList>
      <LanguageToggle></LanguageToggle>
    </HeaderWrapper>
  );
}
