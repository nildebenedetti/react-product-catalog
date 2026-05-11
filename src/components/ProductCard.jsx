function ProductCard() {
  return <div className="card col-12 col-md-3">
    <img> src="..." className="card-img-top" alt="..."</img>
      <div className="card-body">
        <h5 className="card-title productName">Card title</h5>
        <p className="card-text productDescription">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <p className="card-text productPrice">prezzo
        </p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
  </div>
}
export default ProductCard