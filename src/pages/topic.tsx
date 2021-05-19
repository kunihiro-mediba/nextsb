import React from "react";
import Head from "next/head";
import Link from "next/link";

interface Topic {
    id: number;
    title: string;
}

interface Props {
    topics: Topic[];
}

const TopicListPage: React.FC<Props> = ({ topics }) => {
    return (
        <>
            <Head>
                <title>Topics</title>
            </Head>
            <ul>
                {topics.map((topic, index) => {
                    return (
                        <li key={index}>
                            <Link href={`/topic/${topic.id}`}>
                                <a>{topic.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default TopicListPage;

export const getStaticProps = async (): Promise<{ props: Props }> => {
    const topics: Topic[] = await (await import("../data/topics.json")).default;
    return {
        props: {
            topics,
        },
    };
};
