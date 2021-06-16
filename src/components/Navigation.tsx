import React from "react";
import Link from "next/link";

import styles from "./Navigation.module.scss";

export const Navigation: React.FC = () => {
    return (
        <ul className={styles["navigation"]}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    );
};
