import LanguageToggle from "../single/languageToggle";
import {
  HeaderTitleItem,
  HeaderTitles,
  HeaderWrapper,
  MainTitle,
} from "../styled/header";
import Scrollspy from "react-scrollspy";

export default function Header() {
  return (
    <HeaderWrapper>
      <MainTitle>Montassar Laribi</MainTitle>
      <Scrollspy
        className="headerTitles"
        items={["bio", "resume", "highlights"]}
        currentClassName="activeMenu"
      >
        <HeaderTitleItem>
          <a href="#resume">Resume</a>
        </HeaderTitleItem>
        <HeaderTitleItem>
          <a href="#highlights">Highlights</a>
        </HeaderTitleItem>
      </Scrollspy>
      <LanguageToggle></LanguageToggle>
    </HeaderWrapper>
  );
}
