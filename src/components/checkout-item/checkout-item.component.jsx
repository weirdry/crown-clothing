import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Quantity,
	Value,
	Price,
	RemoveButtonContainer,
	RemoveButton,
} from './checkout-item.styles'

export default function CheckoutItem({ item }) {
	const { name, imageUrl, price, quantity } = item
	const { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } =
		useContext(CartContext)

	const handleRemoveItem = () => removeItemFromCart(item)
	const handleIncreaseItem = () => increaseItemQuantity(item)
	const handleDecreaseItem = () => decreaseItemQuantity(item)

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>

			<Name>{name}</Name>
			<Quantity>
				<button onClick={handleDecreaseItem} disabled={quantity === 0}>
					&#10094;
				</button>
				<Value>{quantity}</Value>
				<button onClick={handleIncreaseItem} disabled={quantity >= 99}>
					&#10095;
				</button>
			</Quantity>
			<Price>$ {price}</Price>
			<RemoveButtonContainer>
				<RemoveButton onClick={handleRemoveItem}>&#10005;</RemoveButton>
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	)
}
