import Head from "next/head";
import { useSelector } from "react-redux";
import Body from "../components/sections/Body";
import Header from "../components/sections/Header";
import Resume from "../components/sections/Resume";
import Modal from "../components/single/Modal";
import { MainApp, MonitorWrapper } from "../components/styled/components";
import { withTranslation } from "../i18n";
import { selectShowModal } from "../store/zoom/zoomSlice";

const Home = ({ t }) => {
  const showModal = useSelector(selectShowModal);
  return (
    <MainApp>
      <Head>
        <title>{t("pageTitle")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MonitorWrapper id="bio">
        <Modal showModal={showModal}></Modal>
        <Header></Header>
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
