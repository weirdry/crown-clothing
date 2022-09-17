import { useSelector, useDispatch } from 'react-redux'

import {
	removeItemFromCart,
	increaseItemQuantity,
	decreaseItemQuantity,
} from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.seletor'

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

	const dispatch = useDispatch()

	const cartItems = useSelector(selectCartItems)

	const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, item))
	const handleIncreaseItem = () =>
		dispatch(increaseItemQuantity(cartItems, item))
	const handleDecreaseItem = () =>
		dispatch(decreaseItemQuantity(cartItems, item))

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
