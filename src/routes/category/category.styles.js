import styled from '@emotion/styled'

export const CategoryContianer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 100px;

	.title {
		font-size: 28px;
		margin-bottom: 25px;
	}
`

export const CategoryItemsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	column-gap: 10px;
	row-gap: 50px;
`
