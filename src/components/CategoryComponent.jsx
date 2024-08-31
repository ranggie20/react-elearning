import { Link } from 'react-router-dom'

const CategoryComponent = ({url, title, image}) => {

    return (
        <div className="single-new-pro mb-30 text-center">
            <div className="product-img">
                <img src={image} alt={title} />
            </div>
            <div className="product-caption">
                <h3>
                    <Link to={url}>{title}</Link>
                </h3>
            </div>
        </div>
    )
}

export default CategoryComponent