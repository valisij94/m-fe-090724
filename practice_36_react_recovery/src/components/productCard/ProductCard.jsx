import { useDispatch } from "react-redux"
import { addProductToCart, removeItemFromCart, removeProductFromCart } from "../../store/slices/cartSlice";

export default function ProductCard( { product } ) {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch( addProductToCart(product) )
  }

  const handleRemoveItemFromCart = () => {
    dispatch( removeItemFromCart(product) );
  }

  const handleRemoveProductFromCart = () => {
    dispatch( removeProductFromCart(product) );
  }

  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="productCardPrice">{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveItemFromCart}>Remove 1 item from Cart</button>
      <button onClick={handleRemoveProductFromCart}>Remove product from Cart</button>
    </div>
  )
}