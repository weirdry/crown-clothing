import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
`

export const LogoLink = styled(Link)`
	padding: 0 10px;
`

export const NavLinks = styled.div`
	width: auto;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`
