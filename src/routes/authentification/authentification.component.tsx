import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

import { AuthentificationContainer } from './authentification.styles'

export default function Authentification() {
	return (
		<AuthentificationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthentificationContainer>
	)
}
