import React, { useContext, useEffect, useState } from "react";
import { QuoteContext } from "../../contexts/QuoteContext";
import styles from "../../styles/components/Quote/Button.module.scss";

const Button = ({ children, id, type }) => {
    const { quote, fetchQuote } = useContext(QuoteContext);
    const [href, setHref] = useState("");

    useEffect(() => {
        if (type === "share")
            setHref(
                `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.quote}" ${quote.author}`
            );
    }, [quote, type]);

    const handleClick = (e) => {
        if (type === "share") {
            return;
        }
        e.preventDefault();
        fetchQuote();
    };

    return (
        <a id={id} className={styles.Button} onClick={handleClick} href={href}>
            {children}
        </a>
    );
};

export default Button;
