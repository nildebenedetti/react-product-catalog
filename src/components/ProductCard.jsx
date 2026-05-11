function ProductCard({
  productImg = "url",
  productName = "Product Name",
  productPrice = "19.99",
  productCategory = "",
  productDescription = "A beautiful product you definitely need. Handmade by fairies."
}) {
  return <div className="card col-12 col-md-3">
    <img src={productImg} className="card-img-top" alt={productName}></img>
      <div className="card-body">
        <h5 className="card-title productName">{productName}</h5>
        <p className="card-text productDescription">{productDescription}</p>
        <p className="card-text productPrice">
          <span>&euro; </span>{productPrice}
        </p>
        <p className="card-text productCategory">{productCategory}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
  </div>
}
export default ProductCard