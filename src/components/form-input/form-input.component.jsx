import './form-input.styles.scss'

export default function FormInput(props) {
	const { label, inputOptions } = props
	const { type, name, onChange, value } = inputOptions

	return (
		<div className="group">
			<input
				className="form-input"
				required
				type={type}
				name={name}
				onChange={onChange}
				value={value}
			/>

			{label && (
				<label
					className={`${value.length !== 0 ? 'shrink' : null} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	)
}
