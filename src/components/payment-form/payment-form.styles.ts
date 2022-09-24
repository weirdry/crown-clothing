import styled from '@emotion/styled'

import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
	height: 300px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const FormContainer = styled.form`
	height: 100px;
	width: 100%;
`

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`
