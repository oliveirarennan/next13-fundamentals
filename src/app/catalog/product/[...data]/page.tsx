import { AddToCartButton } from "./add-to-cart-button"

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/oliveirarennan')
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}
