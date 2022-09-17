import { useSelector } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {
	selectCartItems,
	selectTotalPrice,
} from '../../store/cart/cart.seletor'

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './checkout.styles'

export default function Checkout() {
	const cartItems = useSelector(selectCartItems)
	const totalPrice = useSelector(selectTotalPrice)

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
