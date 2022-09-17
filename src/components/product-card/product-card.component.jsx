import { useSelector, useDispatch } from 'react-redux'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { selectCartItems } from '../../store/cart/cart.seletor'
import { addItemToCart } from '../../store/cart/cart.action'

import { ProductCardContainer, Footer } from './product-card.styles'

export default function ProductCard({ product }) {
	const { name, price, imageUrl } = product

	const dispatch = useDispatch()

	const cartItems = useSelector(selectCartItems)

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={name} />

			<Footer>
				<span className="name">{name}</span>
				<span className="price">$ {price}</span>
			</Footer>

			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to Cart
			</Button>
		</ProductCardContainer>
	)
}
