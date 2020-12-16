import "../styles/globals.css";
import "../assets/icofont/icofont.min.css";
import App from "next/app";
import { appWithTranslation } from "../i18n";
import { Provider } from "react-redux";
import withReduxStore from "../lib/with-redux-store";

const MyApp = ({ Component, pageProps, reduxStore }) => (
  <Provider store={reduxStore}>
    <Component {...pageProps} />
  </Provider>
);

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default withReduxStore(appWithTranslation(MyApp));
