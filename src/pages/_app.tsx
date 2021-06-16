import React from "react";
import NextApp, { AppInitialProps, AppContext, AppProps } from "next/app";
import Head from "next/head";

import "../styles.scss";

import { ErrorBoundary } from "../components/ErrorBoundary";

interface Props {
    now: string;
}

export default function App({ Component, pageProps }: AppProps<Props>): React.ReactElement {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1,width=device-width" />
            </Head>
            <ErrorBoundary>
                <Component {...pageProps} />
            </ErrorBoundary>
        </>
    );
}

App.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => {
    const appProps = await NextApp.getInitialProps(appContext);
    const now = new Date().toISOString();
    return {
        ...appProps,
        pageProps: {
            ...appProps.pageProps,
            now,
        },
    };
};
