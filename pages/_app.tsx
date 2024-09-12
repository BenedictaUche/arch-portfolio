import { ReactElement, ReactNode } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HEAD from "next/head";
import NextTopLoader from "nextjs-toploader";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <HEAD>
        <title>Benita</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </HEAD>
      <NextTopLoader
        color="#29D"
        initialPosition={0.3}
        crawlSpeed={200}
        crawl={true}
        easing="ease"
        height={3}
        showSpinner={true}
        shadow="0 0 10px rgba(0, 0, 0, 0.3)"
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
