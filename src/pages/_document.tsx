import NextDocument, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";

class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
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
