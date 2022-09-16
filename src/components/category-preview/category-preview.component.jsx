import { useNavigate } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

import './category-preview.styles.scss'

export default function CategoryPreview(props) {
	const { title, products } = props

	const navigate = useNavigate()

	return (
		<div className="category-preview-container">
			<h2 onClick={() => navigate(`${title.toLowerCase()}`)}>
				<span className="title">{title.toUpperCase()}</span>
			</h2>
			<div className="preview">
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	)
}
