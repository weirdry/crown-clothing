import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Spinner from './components/spinner/spinner.component'
import { checkUserSession } from './store/user/user.action'

const Home = lazy(() => import('./routes/home/home.component'))
const Authentification = lazy(() =>
	import('./routes/authentification/authentification.component'),
)
const Navigation = lazy(() =>
	import('./routes/navigation/navigation.component'),
)
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))

export default function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkUserSession())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Suspense fallback={<Spinner />}>
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
		</Suspense>
	)
}
