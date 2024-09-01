import React, { useEffect, useState } from 'react'
import PopularItemsList from '../layouts/components/PopularItemsList';

import CourseComponent from '../components/CourseComponent';
import CategoryComponent from '../components/CategoryComponent';

import axios from '../api/axios'

const SliderArea = () => {
	return (
		<div className="slider-area ">
			<div className="slider-active">
				{/* Single Slider */}
				<div className="single-slider slider-height d-flex align-items-center slide-bg">
					<div className="container">
						<div className="row justify-content-between align-items-center">
							<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
								<div className="hero__caption">
									<h1
										data-animation="fadeInLeft"
										data-delay=".2s"
										data-duration="2000ms"
									>
										Welcome to e-Learning
									</h1>
									<p
										data-animation="fadeInLeft"
										data-delay=".3s"
										data-duration="2000ms"
									>
										Jadikan setiap hari kesempatan untuk belajar sesuatu yang baru
										dengan e-learning yang fleksibel dan personal
									</p>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
								<div
									className="hero__img"
									data-animation="bounceIn"
									data-delay=".4s"
								>
									<img
										src="assets/img/hero/watch.png"
										alt=""
										className=" heartbeat"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

const SectionCategory = () => {

	const [categories, setCategories] = useState([]);

	const fetchDataCategory = async function () {
		try {
			const response = await axios.get('/public/category');
			console.log(response.data.data)
			setCategories(response.data.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchDataCategory()
	}, [])

	return (
		<>
			<section className="new-product-area section-padding30">
				<div className="container">
					{/* Section tittle */}
					<div className="row">
						<div className="col-xl-12">
							<div className="section-tittle mb-70">
								<h2>Category</h2>
							</div>
						</div>
					</div>
					<div className="row">
						{categories.map((item, index) => (
							<div
								key={index}
								className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
								<CategoryComponent
									title={item.category_name}
									image={`${import.meta.env.VITE_API_URL}/${item.icon}`}
									url={`category/${item.category_id}`}
								/>
							</div>
						))}
					</div>
				</div>
			</section>

		</>
	)
}
const Popular = () => {
	const [populars, setPopulars] = useState([])

	const fetchDataPopular = async () => {
		try {
			const response = await axios.get('/public/popular');
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
			<div className='popular-items container py-5'>
				<div className="row">
					<div className="col-xl-12">
						<div className="section-tittle mb-70">
							<h2>Popular Course</h2>
						</div>

						<div className="row">
							{populars.map((item, index) => (
								<div key={index} className='col-md-4'>									
									<CourseComponent
										url={`/course/${item.course_id}`}
										imageSrc={`${import.meta.env.VITE_API_URL}/${item.thumbnail}`}
										title={item.course_name}
										price={item.price} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
const HomePage = () => {

	return (
		<>
			<SliderArea />
			<SectionCategory />
			<Popular />
		</>
	);
};

export default HomePage