import styled from '@emotion/styled'

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 100px;

	h2 {
		margin-bottom: 0px;
	}
`

export const Title = styled.div`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
`

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	column-gap: 10px;
	row-gap: 50px;
`
