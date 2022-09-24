import { useNavigate } from 'react-router-dom'

import { CategoryItem } from '../../store/categories/categories.types'

import ProductCard from '../product-card/product-card.component'

import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from './category-preview.styles'

type CategoryPreviewProps = {
	title: string
	products: CategoryItem[]
}

export default function CategoryPreview(props: CategoryPreviewProps) {
	const { title, products } = props

	const navigate = useNavigate()

	return (
		<CategoryPreviewContainer>
			<h2 onClick={() => navigate(`${title.toLowerCase()}`)}>
				<Title>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	)
}
