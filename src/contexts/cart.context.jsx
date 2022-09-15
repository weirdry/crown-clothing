import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
	// Check wehter item has already added to the cart
	const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)

	// If so, adjust a quantity of the item
	if (existingCartItem) {
		return cartItems.map((item) =>
			item.id === productToAdd.id
				? { ...productToAdd, quantity: item.quantity + 1 }
				: item,
		)
	}

	// If not, just add to the cart with quantity one
	return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const sumCartItems = (cartItems) => {
	const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
	return cartCount
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	sumCartItems: () => {},
	cartCount: 0,
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [cartCount, setCartCount] = useState(0)

	useEffect(() => {
		setCartCount(sumCartItems(cartItems))
	}, [cartItems])

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd))
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		sumCartItems,
		cartCount,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
