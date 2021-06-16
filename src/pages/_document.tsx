import NextDocument, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): React.ReactElement {
        return (
            <Html>
                <Head />
                <body>
                    <main>
                        <Main />
                    </main>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
