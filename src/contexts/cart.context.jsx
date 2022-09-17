import { createContext, useReducer } from 'react'

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

export const CART_ACTION_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	totalPrice: 0,
}

const cartReducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			}
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			}
		default:
			throw new Error(`Unhandled tyep ${type} in cartReducer`)
	}
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
	totalPrice: 0,
	removeItemFromCart: () => {},
	increaseItemQuantity: () => {},
	decreaseItemQuantity: () => {},
})

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
	const { isCartOpen, cartItems, cartCount, totalPrice } = state

	const updateCartItems = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, item) => total + item.quantity,
			0,
		)
		const newTotalPrice = newCartItems.reduce(
			(total, item) => total + item.quantity * item.price,
			0,
		)

		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: {
				cartItems: newCartItems,
				cartCount: newCartCount,
				totalPrice: newTotalPrice,
			},
		})
	}

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd)
		updateCartItems(newCartItems)
	}

	const removeItemFromCart = (productToRemove) => {
		const newCartItems = removeItem(cartItems, productToRemove)
		updateCartItems(newCartItems)
	}

	const increaseItemQuantity = (productToAdjust) => {
		const newCartItems = adjustQuantity(cartItems, productToAdjust, true)
		updateCartItems(newCartItems)
	}

	const decreaseItemQuantity = (productToAdjust) => {
		const newCartItems = adjustQuantity(cartItems, productToAdjust, false)
		updateCartItems(newCartItems)
	}

	const setIsCartOpen = (newIsCartOpen) => {
		dispatch({
			type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
			payload: newIsCartOpen,
		})
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		totalPrice,
		removeItemFromCart,
		increaseItemQuantity,
		decreaseItemQuantity,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
