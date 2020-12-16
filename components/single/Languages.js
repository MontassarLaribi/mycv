import { withTranslation } from "../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  LanguageSpan,
  ShadowBoxContainer,
  ShadowTable,
  ShadowTableColumn,
  ShadowTableRow,
  TitleContainerPrimary,
} from "../styled/body";

const Languages = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("languages.title")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <ShadowBoxContainer>
        <ShadowTable>
          <tbody>
            <ShadowTableRow>
              <ShadowTableColumn>
                <LanguageSpan>{t("languages.items.0.name")}</LanguageSpan>
              </ShadowTableColumn>
              <ShadowTableColumn>
                {t("languages.items.0.level")}
              </ShadowTableColumn>
            </ShadowTableRow>
            <ShadowTableRow>
              <ShadowTableColumn>
                <LanguageSpan>{t("languages.items.1.name")}</LanguageSpan>
              </ShadowTableColumn>
              <ShadowTableColumn>
                {t("languages.items.1.level")}
              </ShadowTableColumn>
            </ShadowTableRow>
            <ShadowTableRow>
              <ShadowTableColumn>
                <LanguageSpan>{t("languages.items.2.name")}</LanguageSpan>
              </ShadowTableColumn>
              <ShadowTableColumn>
                {t("languages.items.2.level")}
              </ShadowTableColumn>
            </ShadowTableRow>
            <ShadowTableRow>
              <ShadowTableColumn>
                <LanguageSpan>{t("languages.items.3.name")}</LanguageSpan>
              </ShadowTableColumn>
              <ShadowTableColumn>
                {t("languages.items.3.level")}
              </ShadowTableColumn>
            </ShadowTableRow>
            <ShadowTableRow>
              <ShadowTableColumn>
                <LanguageSpan>{t("languages.items.4.name")}</LanguageSpan>
              </ShadowTableColumn>
              <ShadowTableColumn>
                {t("languages.items.4.level")}
              </ShadowTableColumn>
            </ShadowTableRow>
          </tbody>
        </ShadowTable>
      </ShadowBoxContainer>
    </>
  );
};
Languages.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Languages);
