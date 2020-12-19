import { withTranslation } from "../../i18n";
import styled from "styled-components";
import {
  BodySectionColumn,
  BodySectionFlex,
  FooterText,
  FooterContainer,
} from "../styled/body";

const Highlights = ({ t }) => {
  const today = new Date();
  return (
    <BodySectionContainer>
      <BodySectionFlex>
        <BodySectionColumn noPad={true} full={true}>
          <FooterContainer>
            <FooterText>
              ©Copyright, LARIBI Mohamed Montassar {today.getFullYear()}
            </FooterText>
          </FooterContainer>
        </BodySectionColumn>
      </BodySectionFlex>
    </BodySectionContainer>
  );
};

Highlights.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Highlights);
const BodySectionContainer = styled.div``;
