import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCategoriesMap } from '../../store/categories/categories.selector'

import ProductCard from '../../components/product-card/product-card.component'

import { CategoryContianer, CategoryItemsContainer } from './category.styles'

export default function Category() {
	const { category } = useParams()
	const categoriesMap = useSelector(selectCategoriesMap)
	const [products, setProducts] = useState(categoriesMap[category])

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [category, categoriesMap])

	return (
		<CategoryContianer>
			<h2 className="title">{category.toUpperCase()}</h2>
			<CategoryItemsContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryItemsContainer>
		</CategoryContianer>
	)
}
