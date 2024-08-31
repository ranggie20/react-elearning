import React from 'react'
import {Link, useParams} from 'react-router-dom'


const SectionHeader = () => {
    return (
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2> {courseTitle} </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

const SectionDetail = () => {
    return (
        <>
            <div className="product_image_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div
                                className="align-self-center event_outer development"
                                style={{ minWidth: 700 }} >
                                <div className="events_item">
                                    <div className="thumb">
                                        <Link to="#"> <img src="assets/images/course-02.jpg" alt="" /> </Link>
                                        <span className="category" />
                                    </div>
                                    <div className="down-content">
                                        <span className="author" />
                                        <h4 />
                                        <iframe
                                            width={360}
                                            height={300}
                                            src="https://www.youtube.com/embed/OEhw6GqQDts?si=yPU4quUPi-RaSdF-"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="single_product_text text-center">
                                <h3>
                                    {" "}
                                    Strategi Efektif Mengelola <br />
                                    Reputasi Bisnis Anda{" "}
                                </h3>
                                <p>
                                    Video "Strategi Efektif Mengelola Reputasi Bisnis Anda" membahas
                                    berbagai cara untuk membangun dan mempertahankan reputasi positif
                                    bagi bisnis Anda. Dalam video ini, Anda akan mempelajari
                                    teknik-teknik untuk memantau citra perusahaan secara aktif,
                                    menanggapi umpan balik pelanggan, dan menangani kritik dengan
                                    bijaksana. Video ini juga menguraikan pentingnya komunikasi yang
                                    transparan, pengelolaan media sosial, dan pemanfaatan alat analitik
                                    untuk mengukur dampak strategi reputasi. Dengan menerapkan
                                    strategi-strategi ini, bisnis Anda dapat meningkatkan kepercayaan
                                    pelanggan, memperkuat brand image, dan memastikan pertumbuhan jangka
                                    panjang yang berkelanjutan.
                                </p>
                                <div className="card_area">
                                    <div className="product_count_area">
                                        <p>$7</p>
                                    </div>
                                    <div className="add_to_cart">
                                        <div
                                            className="d-flex justify-content-center align-items-center"
                                            style={{ gap: 10 }}  >
                                            <Link to="cart.html" className="btn_3">
                                                add to cart
                                            </Link>
                                            <div className="wishlist btn2">
                                                <Link to="wishlist.html">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 512 512"
                                                        height="30px"
                                                        width="30px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


const CourseDetailPage = () => {
    
    const params = useParams()
    const [populars, setPopulars] = useState([])

	const fetchDataPopular = async () => {
		try {
			const response = await axios.get('http://192.168.1.16:3000/public/get-course/');
			// console.log(response.data)
			setPopulars(response.data.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchDataPopular()
	}, [])

    return (
        <>
            <SectionHeader />
            <SectionDetail />
        </>
    )
}

export default CourseDetailPage