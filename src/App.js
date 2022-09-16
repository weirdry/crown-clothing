import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { UserProvider } from './contexts/user.context'
import { ProductsProvider } from './contexts/products.context'
import { CartProvider } from './contexts/cart.context'

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentification from './routes/authentification/authentification.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'

export default function App() {
	return (
		<Router>
			<UserProvider>
				<ProductsProvider>
					<CartProvider>
						<Routes>
							<Route path="/" element={<Navigation />}>
								<Route index element={<Home />} />
								<Route path="/shop" element={<Shop />} />
								<Route path="/checkout" element={<Checkout />} />
								<Route path="/auth" element={<Authentification />} />
							</Route>
						</Routes>
					</CartProvider>
				</ProductsProvider>
			</UserProvider>
		</Router>
	)
}
