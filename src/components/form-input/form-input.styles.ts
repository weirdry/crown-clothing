import styled from '@emotion/styled/macro'
import { css } from '@emotion/react'

const subColour = 'grey'
const mainColour = 'black'

const shrinkLableStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${mainColour};
`

type FormInputLabelProps = {
	shrink?: boolean
}

export const FormInputLabel = styled.label<FormInputLabelProps>`
	color: ${subColour};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;

	${(props) => props.shrink && shrinkLableStyles}
`

export const Input = styled.input`
	background: none;
	background-color: white;
	color: ${subColour};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColour};
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${FormInputLabel} {
		${shrinkLableStyles}
	}
`

export const Group = styled.div`
	position: relative;
	margin: 45px 0;

	input[type='password'] {
		letter-spacing: 0.3em;
	}
`
