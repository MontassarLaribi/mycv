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
import { withTranslation } from "../../i18n";

const Resume = ({ t }) => {
  return (
    <ResumeSection>
      <ProfileImageWrapper>
        <ProfileImageDiv>
          <ProfileImage
            priority
            sizes="100vw"
            layout="fill"
            alt="Montassar Laribi"
            src="https://montassarlaribi.com/images/montassar_laribi.png"
          ></ProfileImage>
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
      <DownloadButton onClick={() => window.open("/" + t("cv"))}>
        {t("downloadCV")}
      </DownloadButton>
      <ResumeList>
        <ResumeListItem>
          <IcoFontIcon className="icofont-linkedin"></IcoFontIcon>{" "}
          <BoldText>LinkedIn:</BoldText>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/montassar-laribi/"
          >
            {t("myProfile")}
          </a>
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-certificate-alt-1"></IcoFontIcon>{" "}
          <BoldText>{t("degree")}:</BoldText> {t("degreeDescription")}
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-email"></IcoFontIcon>{" "}
          <BoldText>E-mail:</BoldText>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:montassar.laribi@esprit.tn"
          >
            montassar.laribi@esprit.tn
          </a>
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-phone"></IcoFontIcon>{" "}
          <BoldText>{t("phone")}:</BoldText>{" "}
          <a target="_blank" rel="noopener noreferrer" href="tel:+21627151438">
            +21627151438
          </a>
        </ResumeListItem>
        <ResumeListItem>
          <IcoFontIcon className="icofont-brand-whatsapp"></IcoFontIcon>{" "}
          <BoldText>Whatsapp:</BoldText>{" "}
          <a target="_blank" rel="noopener noreferrer" href="tel:+21627151438">
            +21627151438
          </a>
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
