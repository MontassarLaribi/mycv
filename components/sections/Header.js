import LanguageToggle from "../single/languageToggle";
import {
  HeaderTitleItem,
  HeaderTitleList,
  HeaderWrapper,
  MainTitle,
  MainTitleSmall,
} from "../styled/header";

export default function Header() {
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
