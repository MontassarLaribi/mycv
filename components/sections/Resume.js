import {
  ProfileImage,
  ProfileImageWrapper,
  ResumeSection,
  ProfileImageDiv,
  ThemeColoredText,
  ThemeColoredTextSecondary,
  ResumeDescription,
  ResumeList,
  ResumeListItem,
  IcoFontIcon,
  BoldText,
  DownloadButton,
  FlipText,
  FlipWrapper,
} from "../styled/components";
import Link from "next/link";
import { withTranslation } from "../../i18n";

const Resume = ({ t }) => {
  return (
    <ResumeSection>
      <ProfileImageWrapper>
        <ProfileImageDiv>
          <ProfileImage src="/images/montassar_laribi.png"></ProfileImage>
        </ProfileImageDiv>
      </ProfileImageWrapper>
      <ResumeDescription>
        {t("myNameIs")}{" "}
        <ThemeColoredTextSecondary>{t("name")} </ThemeColoredTextSecondary>
        {t("Im")}
      </ResumeDescription>
      <FlipWrapper>
        <FlipText>
          <li>
            <ThemeColoredText>{t("fullstackengineer")}</ThemeColoredText>
          </li>
          <li>
            <ThemeColoredText>{t("professor")}</ThemeColoredText>
          </li>
        </FlipText>
      </FlipWrapper>
      <DownloadButton onClick={() => window.open("/cv_montassar_laribi.pdf")}>
        {t("downloadCV")}
      </DownloadButton>
      <ResumeList>
        <ResumeListItem>
          <IcoFontIcon className="icofont-linkedin"></IcoFontIcon>{" "}
          <BoldText>LinkedIn:</BoldText>{" "}
          <Link href="https://www.linkedin.com/in/montassar-laribi/">
            {t("myProfile")}
          </Link>
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-certificate-alt-1"></IcoFontIcon>{" "}
          <BoldText>{t("degree")}:</BoldText> {t("degreeDescription")}
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-email"></IcoFontIcon>{" "}
          <BoldText>E-mail:</BoldText>{" "}
          <Link href="mailto:montassar.laribi@esprit.tn">
            montassar.laribi@esprit.tn
          </Link>
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-phone"></IcoFontIcon>{" "}
          <BoldText>{t("phone")}:</BoldText> +33 xxx xxxxx xx
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-brand-whatsapp"></IcoFontIcon>{" "}
          <BoldText>Whatsapp:</BoldText> +33 xxx xxxxx xx
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-ui-calendar"></IcoFontIcon>{" "}
          <BoldText>{t("birthdate")}:</BoldText> 24/11/1995
        </ResumeListItem>
      </ResumeList>
    </ResumeSection>
  );
};

Resume.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Resume);
