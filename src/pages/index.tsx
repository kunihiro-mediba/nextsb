import Head from "next/head";
import React from "react";

import { Navigation } from "../component/Navigation";

interface Props {
    serverTime: string;
}

export default function Home({ serverTime }: Props): React.ReactElement {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Navigation />
            <main>
                <div>Hello</div>
                <div>{serverTime}</div>
            </main>
        </div>
    );
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
    return {
        props:{
            serverTime: (new Date()).toISOString(),
        },
    };
};
