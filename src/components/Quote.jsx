import React from "react";
import Button from "./Quote/Button";
import TwitterIcon from "./icons/TwitterIcon";
import styles from "../styles/components/Quote.module.scss";

const Quote = () => {
    return (
        <main id="quote-box" className={styles.Quote}>
            <div className={styles.QuoteContent}>
                <span className={styles.QuoteMark}>"</span>
                <p id="text">
                    Certain things catch your eye, but pursue only those that
                    capture the heart.
                </p>
                <span className={styles.QuoteMark}>"</span>
            </div>
            <div className={styles.QuoteAuthor}>
                <span id="author" className={styles.QuoteAuthorName}>
                    Ancient Indian Proverb
                </span>
            </div>
            <div className={styles.QuoteButtons}>
                <Button id="tweet-quote" type="share">
                    <TwitterIcon />
                </Button>
                <Button id="new-quote" type="newQuote">
                    New quote
                </Button>
            </div>
        </main>
    );
};

export default Quote;
