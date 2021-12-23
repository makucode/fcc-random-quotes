import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import { QuoteProvider } from "./contexts/QuoteContext";
import styles from "./styles/pages/App.module.scss";
import { fadeInUp } from "./utils/animations";

function App() {
    const animations = fadeInUp;
    return (
        <QuoteProvider>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    transition={{ duration: 0.5 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animations}
                >
                    <div className={styles.App}>
                        <Quote />
                        <Footer />
                    </div>
                </motion.div>
            </AnimatePresence>
        </QuoteProvider>
    );
}

export default App;
