import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/user.context'

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Authentification from './routes/authentification/authentification.component'

export default function App() {
	return (
		<UserProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Navigation />}>
						<Route index element={<Home />} />
						<Route path="/auth" element={<Authentification />} />
					</Route>
				</Routes>
			</Router>
		</UserProvider>
	)
}
