import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.seletor'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
	NavigationContainer,
	LogoLink,
	NavLinks,
	NavLink,
} from './navigation.styles.js'

export default function Navigation() {
	const currentUser = useSelector(selectCurrentUser)
	const isCartOpen = useSelector(selectIsCartOpen)

	return (
		<Fragment>
			<NavigationContainer>
				<LogoLink to="/">
					<CrownLogo className="logo" />
				</LogoLink>

				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" to="/" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}

					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>

			<Outlet />
		</Fragment>
	)
}
