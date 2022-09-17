import { useNavigate } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from './category-preview.styles'

export default function CategoryPreview(props) {
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
