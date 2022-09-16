import './directory-item.style.scss'

export default function DirectoryItem(props) {
	const { title, imageUrl } = props.category

	return (
		<div className="directory-item-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="directory-item-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	)
}
