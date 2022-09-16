import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../contexts/categories.context'

import ProductCard from '../../components/product-card/product-card.component'

import './category.styles.scss'

export default function Category() {
	const { category } = useParams()

	const { categoriesMap } = useContext(CategoriesContext)
	const [products, setProducts] = useState(categoriesMap[category])

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [category, categoriesMap])

	return (
		<div className="category-container">
			<h2 className="title">{category.toUpperCase()}</h2>
			<div className="category-items-contianer">
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	)
}
