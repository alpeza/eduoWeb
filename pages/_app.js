import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import App from "next/app";
import { fetchAPI } from "../lib/api";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return (
    <>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
  }
}

/*
export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}*/

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Pass the data to our page via props
  return { ...appProps, pageProps: { "hi":"ho"} };
};

export default MyApp;
