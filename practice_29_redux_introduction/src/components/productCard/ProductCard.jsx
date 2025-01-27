import { NavLink } from "react-router-dom";

export default function ProductCard( { product } ) {
  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <NavLink to={`/products/${product.id}`}>Edit</NavLink>
      <p className="productCardPrice">{product.price}</p>
    </div>
  )
}