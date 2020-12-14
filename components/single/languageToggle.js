import { I18nContext } from "next-i18next";
import { useContext } from "react";
import { ToggleInput, ToggleSpan, ToggleWrapper } from "../styled/header";
import { i18n } from "../../i18n";
export default function LanguageToggle() {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <ToggleWrapper className={language === "fr" && "active"}>
      <ToggleInput
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
        }
      ></ToggleInput>
      <ToggleSpan className="round-btn"></ToggleSpan>
    </ToggleWrapper>
  );
}
