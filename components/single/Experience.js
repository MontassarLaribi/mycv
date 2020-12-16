import { Fragment } from "react";
import { withTranslation } from "../../i18n";
import {
  BodyTitle,
  BodyTitlesContainer,
  TimeLine,
  TimeLineDivider,
  TimeLineItem,
  TimeLineLeft,
  TimeLineLeftPeriod,
  TimeLineLeftTitle,
  TimeLineRight,
  TimeLineRightDescription,
  TimeLineRightTitle,
  TitleContainerPrimary,
} from "../styled/body";

function getExperience(t) {
  const items = [];
  for (let index = 0; index < 7; index++) {
    items.push(
      <TimeLineItem>
        <TimeLineLeft>
          <TimeLineLeftTitle>
            {t("experience.items." + index + ".school")}
          </TimeLineLeftTitle>
          <TimeLineLeftPeriod>
            {t("experience.items." + index + ".period")}
          </TimeLineLeftPeriod>
        </TimeLineLeft>
        <TimeLineDivider></TimeLineDivider>
        <TimeLineRight>
          <TimeLineRightTitle>
            {t("experience.items." + index + ".title")}
          </TimeLineRightTitle>
          <TimeLineRightDescription>
            {t("experience.items." + index + ".description")}
          </TimeLineRightDescription>
        </TimeLineRight>
      </TimeLineItem>
    );
  }
  return items;
}

const Experience = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("experience.title")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <TimeLine>
        {getExperience(t).map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </TimeLine>
    </>
  );
};
Experience.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Experience);
