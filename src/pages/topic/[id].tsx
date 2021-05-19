import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import marked from "marked";

interface Topic {
    id: number;
    title: string;
    body: string;
}

interface Props {
    topic: Topic;
}

const TopicDetail: React.FC<Props> = ({ topic }) => {
    return (
        <>
            <Head>
                <title>{topic.title} - Topics</title>
            </Head>
            <article>
                <header>
                    <h1>{topic.title}</h1>
                </header>
                <main dangerouslySetInnerHTML={{
                    __html: marked(topic.body),
                }} />
            </article>
            <aside>
                <Link href="/topic">
                    <a>Back to list</a>
                </Link>
            </aside>
        </>
    );
};

export default TopicDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const topics: Topic[] = await (await import("../../data/topics.json")).default;
    const paths = topics.map((topic) => {
        return {
            params: {
                id: `${topic.id}`,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }): Promise<{ props: Props }> => {
    const topics: Topic[] = await (await import("../../data/topics.json")).default;
    for (const topic of topics) {
        if (`${topic.id}` === params.id) {
            return {
                props: {
                    topic,
                },
            };
        }
    }
};
