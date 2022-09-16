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

const sumTotalPrice = (cartItems) => {
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.quantity * item.price,
		0,
	)
	return totalPrice
}

const removeItem = (cartItems, itemToRemove) => {
	const newCartItems = cartItems.filter((item) => item.id !== itemToRemove.id)
	return newCartItems
}

const adjustQuantity = (cartItems, itemToAdjust, increase) => {
	const newCartItems = cartItems.map((item) =>
		item.id === itemToAdjust.id
			? increase
				? { ...itemToAdjust, quantity: item.quantity + 1 }
				: { ...itemToAdjust, quantity: item.quantity - 1 }
			: item,
	)
	return newCartItems
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	sumCartItems: () => {},
	cartCount: 0,
	totalPrice: 0,
	removeItemFromCart: () => {},
	increaseItemQuantity: () => {},
	decreaseItemQuantity: () => {},
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [cartCount, setCartCount] = useState(0)
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		setCartCount(sumCartItems(cartItems))
	}, [cartItems])

	useEffect(() => {
		setTotalPrice(sumTotalPrice(cartItems))
	}, [cartItems])

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd))
	}

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeItem(cartItems, productToRemove))
	}

	const increaseItemQuantity = (productToAdjust) => {
		setCartItems(adjustQuantity(cartItems, productToAdjust, true))
	}

	const decreaseItemQuantity = (productToAdjust) => {
		setCartItems(adjustQuantity(cartItems, productToAdjust, false))
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		sumCartItems,
		cartCount,
		totalPrice,
		removeItemFromCart,
		increaseItemQuantity,
		decreaseItemQuantity,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
