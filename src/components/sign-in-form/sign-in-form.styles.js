import styled from '@emotion/styled'

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 380px;

	h2 {
		margin: 10px 0;
	}
`

export const SignInButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	// justify-content: space-between;

	button {
		flex-basis: 185px;
		flex-grow: 1;
		width: 100%;
	}
`
