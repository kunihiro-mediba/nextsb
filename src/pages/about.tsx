import React, { useState } from "react";
import Head from "next/head";

import { Navigation } from "../components/Navigation";

export const AboutPage: React.FC = (): React.ReactElement => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navigation />
            <main>
                <div>
                    a:{a} b:{b}
                </div>
                <div>
                    <button
                        onClick={() => {
                            setA(a + 1);
                            setB(b + 1);
                        }}
                    >
                        update
                    </button>
                </div>
            </main>
        </>
    );
};

export default AboutPage;
