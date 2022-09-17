import { useContext } from 'react'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CartContext } from '../../contexts/cart.context'

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './checkout.styles'

export default function Checkout() {
	const { cartItems, totalPrice } = useContext(CartContext)

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock></HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>

			{cartItems.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}

			<Total>
				<span>Total:</span> $ {totalPrice}
			</Total>
		</CheckoutContainer>
	)
}
