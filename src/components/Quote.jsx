import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Quote/Button";
import TwitterIcon from "./icons/TwitterIcon";
import { QuoteContext } from "../contexts/QuoteContext";
import { fadeIn } from "../utils/animations";
import styles from "../styles/components/Quote.module.scss";

const Quote = () => {
    const { quote } = useContext(QuoteContext);

    const animations = fadeIn;

    return (
        <main id="quote-box" className={styles.Quote}>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={quote.quote}
                    transition={{ duration: 0.5 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animations}
                >
                    <div className={styles.QuoteContent}>
                        <span className={styles.QuoteMark}>"</span>
                        <p id="text">{quote.quote}</p>
                        <span className={styles.QuoteMark}>"</span>
                    </div>
                    <div className={styles.QuoteAuthor}>
                        <span id="author" className={styles.QuoteAuthorName}>
                            {quote.author}
                        </span>
                    </div>
                </motion.div>
            </AnimatePresence>

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
