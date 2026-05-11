import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

function App() {
  return <div className="wrapper">
    <ProductList>
      <SearchBar/>
    </ProductList>
  </div>
}
export default App;
