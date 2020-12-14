import LanguageToggle from "../single/languageToggle";
import {
  HeaderTitleItem,
  HeaderTitles,
  HeaderWrapper,
  ToggleInput,
  ToggleSpan,
  ToggleWrapper,
} from "../styled/header";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitles>
        <HeaderTitleItem>About</HeaderTitleItem>
        <HeaderTitleItem>Experience</HeaderTitleItem>
        <HeaderTitleItem>Education</HeaderTitleItem>
        <HeaderTitleItem>Other</HeaderTitleItem>
        <HeaderTitleItem>Highlights</HeaderTitleItem>
      </HeaderTitles>
      <LanguageToggle></LanguageToggle>
    </HeaderWrapper>
  );
}
