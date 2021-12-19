import { ThemeProvider } from "next-themes";
import LayoutComp from "../components/LayoutComp";
import { AuthProvider } from "../contexts/AuthContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LayoutComp>
        <Component {...pageProps} />
      </LayoutComp>
    </ThemeProvider>
  );
}

export default MyApp;
