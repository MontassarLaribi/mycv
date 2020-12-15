import LanguageToggle from "../single/languageToggle";
import {
  HeaderTitleItem,
  HeaderTitles,
  HeaderWrapper,
  MainTitle,
} from "../styled/header";

export default function Header() {
  return (
    <HeaderWrapper>
      <MainTitle>Montassar Laribi CV</MainTitle>
      <HeaderTitles>
        <HeaderTitleItem>Resume</HeaderTitleItem>
        <HeaderTitleItem>Highlights</HeaderTitleItem>
      </HeaderTitles>

      <LanguageToggle></LanguageToggle>
    </HeaderWrapper>
  );
}
