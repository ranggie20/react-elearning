import { Link } from 'react-router-dom'
const CourseComponent = ({url, imageSrc, title, price}) => {
	return (
		<div className="single-popular-items mb-50 text-center">
			<Link to={url}>
				<div className="popular-img">
					<img src={imageSrc} alt={title} />
					<div className="img-cap">
						<span>Add to cart</span>
					</div>
					<div className="favorit-items">
						<span className="flaticon-heart" />
					</div>
				</div>
			</Link>
			<div className="popular-caption">
				<h3>
					<Link to={url}>{title}</Link>
				</h3>
				<span>{price}</span>
			</div>
		</div>
	)
}

export default CourseComponent