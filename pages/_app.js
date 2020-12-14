import "../styles/globals.css";
import "../assets/icofont/icofont.min.css";
import App from "next/app";
import { appWithTranslation } from "../i18n";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
