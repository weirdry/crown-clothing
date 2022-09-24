import { CategoryItem } from '../categories/categories.types'
import { CART_ACTION_TYPES, CartItem } from './cart.types'
import {
	createAction,
	withMatcher,
	ActionWithPayload,
} from '../../utils/reducer/reducer.utils'

const addCartItem = (
	cartItems: CartItem[],
	productToAdd: CategoryItem,
): CartItem[] => {
	// Check wehter item has already added to the cart
	const existingCartItem = cartItems?.find(
		(item) => item.id === productToAdd.id,
	)
	// If so, adjust a quantity of the item
	if (existingCartItem) {
		return cartItems.map((item) =>
			item.id === productToAdd.id
				? { ...productToAdd, quantity: item.quantity + 1 }
				: item,
		)
	}
	// If not, just add to the cart with quantity one
	if (cartItems?.length) {
		return [...cartItems, { ...productToAdd, quantity: 1 }]
	} else {
		return [{ ...productToAdd, quantity: 1 }]
	}
}

const removeItem = (
	cartItems: CartItem[],
	itemToRemove: CartItem,
): CartItem[] => {
	const newCartItems = cartItems?.filter((item) => item.id !== itemToRemove.id)
	return newCartItems
}

const adjustQuantity = (
	cartItems: CartItem[],
	itemToAdjust: CartItem,
	increase: boolean,
): CartItem[] => {
	const newCartItems = cartItems?.map((item) =>
		item.id === itemToAdjust.id
			? increase
				? { ...itemToAdjust, quantity: item.quantity + 1 }
				: { ...itemToAdjust, quantity: item.quantity - 1 }
			: item,
	)
	return newCartItems
}

export type SetIsCartOpen = ActionWithPayload<
	CART_ACTION_TYPES.SET_IS_CART_OPEN,
	boolean
>

export type SetCartItems = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_ITEMS,
	CartItem[]
>

export const setIsCartOpen = withMatcher(
	(isCartOpen: boolean): SetIsCartOpen =>
		createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen),
)

export const setCartItems = withMatcher(
	(cartItems: CartItem[]): SetCartItems =>
		createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
)

export const addItemToCart = withMatcher(
	(cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
		const newCartItems = addCartItem(cartItems, productToAdd)
		return setCartItems(newCartItems)
	},
)

export const removeItemFromCart = withMatcher(
	(cartItems: CartItem[], productToRemove: CartItem): SetCartItems => {
		const newCartItems = removeItem(cartItems, productToRemove)
		return setCartItems(newCartItems)
	},
)

export const increaseItemQuantity = withMatcher(
	(cartItems: CartItem[], productToAdjust: CartItem): SetCartItems => {
		const newCartItems = adjustQuantity(cartItems, productToAdjust, true)
		return setCartItems(newCartItems)
	},
)

export const decreaseItemQuantity = withMatcher(
	(cartItems: CartItem[], productToAdjust: CartItem): SetCartItems => {
		const newCartItems = adjustQuantity(cartItems, productToAdjust, false)
		return setCartItems(newCartItems)
	},
)
