import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { SignUpContainer, SignInButtonsContainer } from './sign-in-form.styles'
import {
	googleSignInStart,
	emailSignInStart,
} from '../../store/user/user.action'

const defaultFormFields = {
	email: '',
	password: '',
}

export default function SignInForm() {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const dispatch = useDispatch()

	const resetFormFields = () => setFormFields(defaultFormFields)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormFields((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const signInWithGoogle = async () => dispatch(googleSignInStart())

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			dispatch(emailSignInStart(email, password))
			resetFormFields()
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert('Incorrect password for email')
					break
				case AuthErrorCodes.USER_DELETED:
					alert('No user associated with this email')
					break
				default:
					console.log(error)
			}
		}
	}

	return (
		<SignUpContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					inputOptions={{
						type: 'email',
						name: 'email',
						onChange: handleChange,
						value: email,
						required: true,
					}}
				/>

				<FormInput
					label="Password"
					inputOptions={{
						type: 'password',
						name: 'password',
						onChange: handleChange,
						value: password,
						required: true,
					}}
				/>

				<SignInButtonsContainer>
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</SignInButtonsContainer>
			</form>
		</SignUpContainer>
	)
}
