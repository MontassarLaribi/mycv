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
            <ListItem>
              <span></span>
              ReactJS
            </ListItem>
            <ListItem>
              <span></span>JavaScript
            </ListItem>
            <ListItem>
              <span></span>JQuery
            </ListItem>
            <ListItem>
              <span></span>HTML5/CSS
            </ListItem>
            <ListItem>
              <span></span>SOA (Service Oriented Architecture)
            </ListItem>
            <ListItem>
              <span></span>NodeJS
            </ListItem>
            <ListItem>
              <span></span>Team coach for more than 20+ Teams
            </ListItem>
          </List>
        </BodySectionColumn>
        <BodySectionColumn>
          <Paragraph>{t("highlights.teaching.3")}</Paragraph>
          <List>
            <ListItem>
              <span></span>Problem Solving
            </ListItem>
            <ListItem>
              <span></span>Team management
            </ListItem>
            <ListItem>
              <span></span>Information processing
            </ListItem>
            <ListItem>
              <span></span>Pedagogy & Andragogy
            </ListItem>
            <ListItem>
              <span></span>Various Soft-Skills
            </ListItem>
            <ListItem>
              <span></span>Time management
            </ListItem>
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
