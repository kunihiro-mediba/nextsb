import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1,width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
