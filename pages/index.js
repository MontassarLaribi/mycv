import Head from "next/head";
import Body from "../components/sections/Body";
import Resume from "../components/sections/Resume";
import { MainApp, MonitorWrapper } from "../components/styled/components";
import { withTranslation } from "../i18n";

const Home = ({ t }) => {
  return (
    <MainApp>
      <Head>
        <title>{t("pageTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MonitorWrapper>
        <Resume></Resume>
        <Body></Body>
      </MonitorWrapper>
    </MainApp>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
