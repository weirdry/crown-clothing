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

export const SignUpButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	// justify-content: space-between;

	* {
		flex-basis: 185px;
		flex-grow: 1;
		width: 100%;
	}

	.sign-up-button-space {
		display: flex;
		min-width: 165px;
		// width: 100%;
		height: 50px;
	}
`
