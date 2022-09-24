import { useNavigate } from 'react-router-dom'

import { DirectoryCategory } from '../directory/directory.component'

import {
	DirectoryItemContainer,
	Body,
	BackgroundImage,
} from './directory-item.styles'

type DirectoryItemProps = {
	category: DirectoryCategory
}

export default function DirectoryItem(props: DirectoryItemProps) {
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
