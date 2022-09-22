import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { fetchCategoriesAsync } from '../../store/categories/categories.action'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

export default function Shop() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCategoriesAsync())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	)
}
