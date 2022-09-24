import { ReactNode, ButtonHTMLAttributes } from 'react'

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
	ButtonSpinner,
} from './button.styles'

export enum BUTTON_TYPE_CLASSES {
	base = 'base',
	google = 'google-sign-in',
	inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType])

type ButtonPropsWithChildren<P> = P & { children?: ReactNode | undefined }

export default function Button(
	props: ButtonPropsWithChildren<
		{
			buttonType?: BUTTON_TYPE_CLASSES
			isLoading?: boolean
		} & ButtonHTMLAttributes<HTMLButtonElement>
	>,
) {
	const { children, buttonType, isLoading, ...otherProps } = props
	const CustomButton = getButton(buttonType)

	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	)
}
