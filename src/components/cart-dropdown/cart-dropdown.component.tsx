import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../store/cart/cart.seletor'
import { setIsCartOpen } from '../../store/cart/cart.action'

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles'

export default function CartDropdown() {
	const dispatch = useDispatch()

	const cartItems = useSelector(selectCartItems)
	const navigate = useNavigate()

	const goToPage = (path: string) => {
		navigate(`/${path}`)
		dispatch(setIsCartOpen(false))
	}

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			{cartItems.length !== 0 ? (
				<Button onClick={() => goToPage('checkout')}>GO TO CHECKOUT</Button>
			) : (
				<Button onClick={() => goToPage('shop')}>GO TO SHOP</Button>
			)}
		</CartDropdownContainer>
	)
}
