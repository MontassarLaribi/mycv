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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Montassar Laribi" />
        <meta
          name="description"
          content="Ingénieur full-stack js et enseignant à ESPRIT, spécialisé dans les technologies javascript tel que React, NodeJS."
        />
        <meta
          property="og:description"
          content="Ingénieur full-stack js et enseignant à ESPRIT, spécialisé dans les technologies javascript tel que React, NodeJS."
        />
        <meta
          name="keywords"
          content="ingénieur, fullstack, full-stack, javascript, js, react, puppeteer, jest, cv, france, toulouse, ci/cd, devops, ssr"
        />
        <meta property="og:url" content={`https://montassarlaribi.com`} />
        <link rel="canonical" href="https://montassarlaribi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/montassar_laribi.png" />
        <meta
          property="og:image:url"
          content="https://montassarlaribi.com/images/montassar_laribi.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://montassarlaribi.com/images/montassar_laribi.png"
        />
        <meta property="og:locale" content="fr_FR" />
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
