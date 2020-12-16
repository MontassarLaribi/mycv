import { withTranslation } from "../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TimeLineSecondary,
  TimeLineSecondaryItem,
  TimeLineSecondaryItemCompany,
  TimeLineSecondaryItemDescription,
  TimeLineSecondaryItemPeriod,
  TimeLineSecondaryItemTitle,
  TitleContainerPrimary,
} from "../styled/body";

const Activities = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("activities.title")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>

      <TimeLineSecondary>
        <TimeLineSecondaryItem>
          <TimeLineSecondaryItemPeriod>
            {t("activities.items.0.period")}
          </TimeLineSecondaryItemPeriod>
          <TimeLineSecondaryItemCompany>
            {t("activities.items.0.school")}
          </TimeLineSecondaryItemCompany>
          <TimeLineSecondaryItemTitle>
            {t("activities.items.0.title")}
          </TimeLineSecondaryItemTitle>
          <TimeLineSecondaryItemDescription>
            {t("activities.items.0.description")}
          </TimeLineSecondaryItemDescription>
        </TimeLineSecondaryItem>
        <TimeLineSecondaryItem>
          <TimeLineSecondaryItemPeriod>
            {t("activities.items.1.period")}
          </TimeLineSecondaryItemPeriod>
          <TimeLineSecondaryItemCompany>
            {t("activities.items.1.school")}
          </TimeLineSecondaryItemCompany>
          <TimeLineSecondaryItemTitle>
            {t("activities.items.1.title")}
          </TimeLineSecondaryItemTitle>
          <TimeLineSecondaryItemDescription>
            {t("activities.items.1.description")}
          </TimeLineSecondaryItemDescription>
        </TimeLineSecondaryItem>
      </TimeLineSecondary>
    </>
  );
};
Activities.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Activities);
