import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import App from "next/app";
import { fetchAPI } from "../lib/api";
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
  // Pass the data to our page via props
  return { ...appProps, pageProps: { "hi":"ho"} };
};

export default MyApp;
