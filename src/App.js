import Footer from "./components/Footer";
import Header from "./components/Header";
import Quote from "./components/Quote";
import styles from "./styles/pages/App.module.scss";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Quote />
            <Footer />
        </div>
    );
}

export default App;
