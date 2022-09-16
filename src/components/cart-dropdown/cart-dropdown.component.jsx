import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

export default function CartDropdown() {
	const { cartItems, setIsCartOpen } = useContext(CartContext)
	const navigate = useNavigate()

	const goToPage = (path) => {
		navigate(`/${path}`)
		setIsCartOpen(false)
	}

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			{cartItems.length !== 0 ? (
				<Button onClick={() => goToPage('checkout')}>GO TO CHECKOUT</Button>
			) : (
				<Button onClick={() => goToPage('shop')}>GO TO SHOP</Button>
			)}
		</div>
	)
}
