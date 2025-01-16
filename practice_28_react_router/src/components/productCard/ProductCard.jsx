export default function ProductCard( { product } ) {
  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="productCardPrice">{product.price}</p>
    </div>
  )
}