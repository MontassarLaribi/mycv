import { withTranslation } from "../../../i18n";
import {
  BodySectionColumn,
  BodySectionFlex,
  BodyTitle,
  BodyTitlesContainer,
  TitleContainerPrimary,
} from "../../styled/body";
import { List, ListItem } from "../../styled/header";
import { Paragraph } from "../../styled/highlights";

const Teaching = ({ t }) => {
  return (
    <>
      <BodyTitlesContainer className="section-title">
        <TitleContainerPrimary>
          <BodyTitle>{t("highlights.items.3")}</BodyTitle>
        </TitleContainerPrimary>
      </BodyTitlesContainer>
      <Paragraph>{t("highlights.teaching.0")}</Paragraph>
      <Paragraph>{t("highlights.teaching.1")}</Paragraph>
      <BodySectionFlex>
        <BodySectionColumn>
          <Paragraph>{t("highlights.teaching.2")}</Paragraph>
          <List>
            <ListItem>ReactJS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>JQuery</ListItem>
            <ListItem>HTML5/CSS</ListItem>
            <ListItem>SOA (Service Oriented Architecture)</ListItem>
            <ListItem>NodeJS</ListItem>
            <ListItem>Team coach for more than 20+ Teams</ListItem>
          </List>
        </BodySectionColumn>
        <BodySectionColumn>
          <Paragraph>{t("highlights.teaching.3")}</Paragraph>
          <List>
            <ListItem>Problem Solving</ListItem>
            <ListItem>Team management</ListItem>
            <ListItem>Information processing</ListItem>
            <ListItem>Pedagogy & Andragogy</ListItem>
            <ListItem>Various Soft-Skills</ListItem>
            <ListItem>Time management</ListItem>
          </List>
        </BodySectionColumn>
      </BodySectionFlex>
    </>
  );
};
Teaching.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Teaching);
