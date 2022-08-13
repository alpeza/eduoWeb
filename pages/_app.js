import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import App from "next/app";
import { fetchAllAPI } from "../lib/api";
import { createContext } from "react";
// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const [landingRes ] = await Promise.all([fetchAllAPI("/landing-page")]);
  //console.log(JSON.stringify(landingRes.data, null, 2))
  // Pass the data to our page via props
  return { ...appProps, pageProps: { landingdata: landingRes.data } };
};

export default MyApp;
