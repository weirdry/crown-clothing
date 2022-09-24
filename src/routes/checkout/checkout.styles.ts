import styled from '@emotion/styled'

export const CheckoutContainer = styled.div`
	// width: 55%;
	width: 100%;
	max-width: 800px;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 40px auto 0;
`

export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	// justify-content: space-between;
	gap: 8px;
	border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 100%;

	&:last-child {
		width: auto;

		span {
			display: block;
			min-width: 50px;
		}
	}
`

export const Total = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;

	span {
		font-size: 24px;
	}
`
