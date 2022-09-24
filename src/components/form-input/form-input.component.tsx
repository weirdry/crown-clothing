import { InputHTMLAttributes } from 'react'

import { Group, Input, FormInputLabel } from './form-input.styles'

type FormInputProps = {
	label: string
	inputOptions: InputHTMLAttributes<HTMLInputElement>
}

export default function FormInput(props: FormInputProps) {
	const { label, inputOptions } = props
	const { type, name, onChange, value } = inputOptions

	return (
		<Group>
			<Input
				required
				type={type}
				name={name}
				onChange={onChange}
				value={value}
			/>

			{label && (
				<FormInputLabel
					shrink={Boolean(value && typeof value === 'string' && value.length)}
				>
					{label}
				</FormInputLabel>
			)}
		</Group>
	)
}
