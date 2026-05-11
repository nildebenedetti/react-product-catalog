import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { useState } from "react";

function App() {


  useEffect (() => {
    const URL_API = 'https://fakestoreapi.com/products';

    fetch(URL_API)
    .then ( response => {
      return response.json();
    })
    .then ( json => {
      console.log(json);
      return json;
    })
    .catch (error => {
      console.error('Errore nel caricamento dei dati')
      throw new error;
    })
  }),[];


  return <div className="wrapper">
    <ProductList>
      <SearchBar/>
    </ProductList>
  </div>
}
export default App;
