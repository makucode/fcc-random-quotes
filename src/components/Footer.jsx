import React from "react";
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div>
                by <a href="https://github.com/makucode">makucode</a>
            </div>
        </footer>
    );
};

export default Footer;
