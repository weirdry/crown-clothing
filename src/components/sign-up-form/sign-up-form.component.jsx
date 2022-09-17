import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import { SignUpContainer, SignUpButtonsContainer } from './sign-up-form.styles'

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

export default function SignUpForm() {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { displayName, email, password, confirmPassword } = formFields

	const resetFormFields = () => setFormFields(defaultFormFields)

	const handleChange = (e) => {
		setFormFields((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}

		try {
			const response = await createAuthUserWithEmailAndPassword(email, password)
			const { user } = response

			createUserDocumentFromAuth(user, { displayName })
			// await createUserDocumentFromAuth(user, { displayName })
			resetFormFields()
		} catch (error) {
			switch (error.code) {
				case 'auth/email-already-in-use':
					alert('Email has already been in use')
					break
				case 'auth/weak-password':
					alert('Password should be at least 6 characters')
					break
				default:
					console.log(error)
			}
		}
	}

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					inputOptions={{
						type: 'text',
						name: 'displayName',
						onChange: handleChange,
						value: displayName,
						required: true,
					}}
				/>

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

				<FormInput
					label="Confirm Password"
					inputOptions={{
						type: 'password',
						name: 'confirmPassword',
						onChange: handleChange,
						value: confirmPassword,
						required: true,
					}}
				/>

				<SignUpButtonsContainer>
					<Button type="submit">Sign Up</Button>
					<div className="sign-up-button-space" />
				</SignUpButtonsContainer>
			</form>
		</SignUpContainer>
	)
}
