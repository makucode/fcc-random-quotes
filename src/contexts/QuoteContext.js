import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchQuote = async () => {
        setLoading(true);
        const { data } = await axios.get("https://api.quotable.io/random");
        setQuote({ quote: data.content, author: data.author });
        setLoading(false);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <QuoteContext.Provider value={{ quote, fetchQuote, loading }}>
            {children}
        </QuoteContext.Provider>
    );
};
