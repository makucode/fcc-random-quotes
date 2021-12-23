import React from "react";
import styles from "../../styles/components/Quote/Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.Loader}>
            <span className={styles.One}></span>
            <span className={styles.Two}></span>
            <span className={styles.Three}></span>
        </div>
    );
};

export default Loader;
