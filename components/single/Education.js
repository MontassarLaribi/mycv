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

function getEducation(t) {
  const items = [];
  for (let index = 0; index < 4; index++) {
    items.push(
      <TimeLineItem>
        <TimeLineLeft>
          <TimeLineLeftTitle>
            {t("education.items." + index + ".school")}
          </TimeLineLeftTitle>
          <TimeLineLeftPeriod>
            {t("education.items." + index + ".period")}
          </TimeLineLeftPeriod>
        </TimeLineLeft>
        <TimeLineDivider></TimeLineDivider>
        <TimeLineRight>
          <TimeLineRightTitle>
            {t("education.items." + index + ".title")}
          </TimeLineRightTitle>
          <TimeLineRightDescription>
            {t("education.items." + index + ".description")}
          </TimeLineRightDescription>
        </TimeLineRight>
      </TimeLineItem>
    );
  }
  return items;
}

const Education = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer>
        <TitleContainerPrimary>
          <BodyTitle>{t("education.title")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <TimeLine>
        {getEducation(t).map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </TimeLine>
    </>
  );
};
Education.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Education);
