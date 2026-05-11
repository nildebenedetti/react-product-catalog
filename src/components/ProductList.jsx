import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useEffect } from "react";

function ProductList() {
    {/** mi setto una variabile di stato per la lista di prodotti 
    di modo che sia dinamica e aggiornata all'avvio di app ed 
    eventuali trigger che verranno aggiunti in futuro*/}
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const URL_API = 'https://fakestoreapi.com/products';

        fetch(URL_API)
            .then(response => {
                return response.json();
            })
            .then(json => {
                // belli i dati, ora li assegno alla variabile di stato productList
                setProductList(json);
            })
            .catch(error => {
                console.error('Errore nel caricamento dei dati')
                throw error;
            })
    }, []);


    return <div>
        <ProductCard/>
    </div>

}
export default ProductList