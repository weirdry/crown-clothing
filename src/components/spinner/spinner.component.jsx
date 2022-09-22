import { SpinnerContainer, SpinnerOverlay } from './spinner.styles'

export default function Spinner() {
	return (
		<div
			style={{
				width: '100%',
				minHeight: '80vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<SpinnerContainer>
				<SpinnerOverlay />
			</SpinnerContainer>
		</div>
	)
}
