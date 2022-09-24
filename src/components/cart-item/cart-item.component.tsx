import { CartItemContainer, ItemDetails } from './cart-item.styles'

import { CartItem as CartItemTypes } from '../../store/cart/cart.types'

type CartItemProps = {
	item: CartItemTypes
}

export default function CartItem({ item }: CartItemProps) {
	const { name, imageUrl, price, quantity } = item

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span className="name">{name}</span>
				<span className="price">
					{quantity} &nbsp;<span>X</span>&nbsp; $ {price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	)
}
