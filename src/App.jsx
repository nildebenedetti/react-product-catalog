import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  return <div className="wrapper">
    <ProductList>
      <SearchBar/>
    </ProductList>
  </div>
}
export default App;
