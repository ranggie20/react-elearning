import { Link } from "react-router-dom";

const DetailComponent = ({url, title, deskripsi}) => {
    return (
        <div className="product_image_area" style={{ marginTop: "3rem" }}>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div
                        className="align-self-center event_outer development"
                        style={{ minWidth: 0 }}>
                        <Link to={url}>
                        <div className="events_item">
                            <div className="down-content">
                            <span className="author" />
                            <h4 />
                            <iframe
                                width={360}
                                height={300}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            />
                            </div>
                        </div>
                        </Link>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div
                        className="single_product_text text-center"
                        style={{ marginBottom: "3rem" }}>
                        <h3> {title} </h3>
                        <p>
                            {deskripsi}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailComponent