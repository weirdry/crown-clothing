import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentification from './routes/authentification/authentification.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'

import { checkUserSession } from './store/user/user.action'

export default function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkUserSession())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="/shop/*" element={<Shop />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/auth" element={<Authentification />} />
				</Route>
			</Routes>
		</Router>
	)
}
