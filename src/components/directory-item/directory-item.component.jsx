import { useNavigate } from 'react-router-dom'

import {
	DirectoryItemContainer,
	Body,
	BackgroundImage,
} from './directory-item.styles'

export default function DirectoryItem(props) {
	const { title, imageUrl, route } = props.category

	const navicate = useNavigate()

	const handleNavigate = () => navicate(route)

	return (
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<Body onClick={handleNavigate}>
				<h2>{title.toUpperCase()}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	)
}
