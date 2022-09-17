import { useSelector, useDispatch } from 'react-redux'

import {
	selectIsCartOpen,
	selectCartCount,
} from '../../store/cart/cart.seletor'
import { setIsCartOpen } from '../../store/cart/cart.action'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

export default function CartIcon() {
	const dispatch = useDispatch()

	const isCartOpen = useSelector(selectIsCartOpen)
	const cartCount = useSelector(selectCartCount)

	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}
