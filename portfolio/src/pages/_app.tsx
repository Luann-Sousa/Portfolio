import { Theme } from "../styles/globalStyles";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
