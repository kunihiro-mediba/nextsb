import Head from "next/head";

import { Navigation } from "../component/Navigation";

export default function Home({ serverTime }) {
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

export const getStaticProps = async () => {
    return {
        props:{
            serverTime: (new Date()).toISOString(),
        },
    };
};
