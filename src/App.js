import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/sign-in.component'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="/sign-in" element={<SignIn />} />
				</Route>
			</Routes>
		</Router>
	)
}
