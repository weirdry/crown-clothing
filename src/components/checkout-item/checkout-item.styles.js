import styled from '@emotion/styled'

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 8px;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`

export const ImageContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;

	img {
		width: 90%;
		height: 100%;
		max-height: 164px;
		object-fit: cover;
	}
`

export const Name = styled.span`
	width: 100%;
`

export const Quantity = styled.span`
	width: 100%;
	display: flex;

	button {
		all: unset;
		cursor: pointer;

		:disabled {
			opacity: 0.2;
			cursor: default;
		}
	}
`

export const Price = styled.span`
	width: 100%;
`

export const Value = styled.span`
	width: 20px;
	margin: 0 10px;
	text-align: center;
`

export const RemoveButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	min-width: 50px;
`

export const RemoveButton = styled.button`
	all: unset;
	display: flex;
	justify-content: center;
	min-width: auto;
	cursor: pointer;
`
