import { CART_ACTION_TYPES } from './cart.types'
import { createAction } from '../../utils/reducer/reducer.utils'

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

export const setIsCartOpen = (isCartOpen) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen)

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd)
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
	const newCartItems = removeItem(cartItems, productToRemove)
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const increaseItemQuantity = (cartItems, productToAdjust) => {
	const newCartItems = adjustQuantity(cartItems, productToAdjust, true)
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const decreaseItemQuantity = (cartItems, productToAdjust) => {
	const newCartItems = adjustQuantity(cartItems, productToAdjust, false)
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
