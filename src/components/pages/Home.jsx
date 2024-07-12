import { useState, useEffect } from "react";
import Item from "../Item";

const useUrl = (category) => {
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=50`, { mode: "cors" })
            .then(response => {
                if(response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => {
                setUrl(response);
                setUpdate(true);
            })
            .catch((error) => {
                setError(error);
                setUpdate(false);
            })
            .finally(() => setLoading(false));
    }, []);

    return { url, error, loading, update };
};

function Home({ category, setItem }) {

    const { url, error, loading, update } = useUrl(category);

    if(loading) return <p>Loading items...</p>
    if(error) return <p>A network error has occured.</p>

    {if(update == true)
        return (
            <main>
                {url.map((element) => {
                    return (
                        <Item 
                            image={element.image} 
                            title={element.title} 
                            setItem={setItem} 
                            cart={false}
                        />
                    );
                })}
            </main>
        );
    }
}

export default Home;