import React from "react";
import styles from "../../styles/components/Quote/Button.module.scss";

const Button = ({ children, id, handler, type }) => {
    const handleClick = () => {
        if (type === "share") {
        }
    };

    return (
        <a
            id={id}
            className={styles.Button}
            onclick={handleClick}
            href={
                type === "share"
                    ? "https://twitter.com/intent/tweet?text=Hello%20world"
                    : ""
            }
        >
            {children}
        </a>
    );
};

export default Button;
