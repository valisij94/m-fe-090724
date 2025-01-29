import { useParams } from "react-router-dom"

export default function ProductDetailPage() {

  const { productId } = useParams();
  return (
    <p>This page will be ready soon! The product id is {productId}</p>
  )
}