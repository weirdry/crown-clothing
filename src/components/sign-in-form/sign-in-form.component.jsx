import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import './sign-in-form.style.scss'

const defaultFormFields = {
	email: '',
	password: '',
}

export default function SignInForm() {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const resetFormFields = () => setFormFields(defaultFormFields)

	const handleChange = (e) => {
		setFormFields((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const signInWithGoogle = async () => await signInWithGooglePopup()

	const handleSubmit = async (e) => {
		e.preventDefault()

		resetFormFields()
		try {
			await signInAuthUserWithEmailAndPassword(email, password)
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect password for email')
					break
				case 'auth/user-not-found':
					alert('No user associated with this email')
					break
				default:
					console.log(error)
			}
		}
	}

	return (
		<div className="sign-up-container">
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

				<div className="sign-in-buttons-container">
					<Button type="submit">Sign In</Button>
					<Button type="button" buttonType="google" onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	)
}
