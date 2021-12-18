import LayoutComp from "../components/LayoutComp";
import { AuthProvider } from "../contexts/AuthContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComp>
      <Component {...pageProps} />
    </LayoutComp>
  );
}

export default MyApp;
