import { Group, Input, FormInputLabel } from './form-input.styles'

export default function FormInput(props) {
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

			{label && <FormInputLabel shrink={value.length}>{label}</FormInputLabel>}
		</Group>
	)
}
