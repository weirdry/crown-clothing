import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'

export default function CheckoutItem({ item }) {
	const { name, imageUrl, price, quantity } = item
	const { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
		useContext(CartContext)

	const handleRemoveItem = () => removeItemFromCart(item)
	const handleIncreaseItem = () => increaseItemQuantity(item)
	const handleDecreaseItem = () => decreaseItemQuantity(item)

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>

			<span className="name">{name}</span>
			<span className="quantity">
				<button onClick={handleDecreaseItem} disabled={quantity === 0}>
					&#10094;
				</button>
				<span className="value">{quantity}</span>
				<button onClick={handleIncreaseItem} disabled={quantity >= 99}>
					&#10095;
				</button>
			</span>
			<span className="price">$ {price}</span>
			<div className="remove-button" onClick={handleRemoveItem}>
				&#10005;
			</div>
		</div>
	)
}
