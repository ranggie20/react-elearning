import React from 'react'
import PopularItemsList from '../layouts/components/PopularItemsList';
import CourseComponent from '../components/CourseComponent';

const SectionMarketing = () => {
	return (
		<>
			<div className="slider-area ">
				<div className="single-slider slider-height2 d-flex align-items-center">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="hero-cap text-center">
									<h2>Marketing</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const MarketingPage = () => {
	const currency = '$'
	const marketingItems = [
		{ image: 'assets/img/gallery/bisnis.jpeg', title: 'Pengelolaan Bisnis', price: 35, url: '/' },
		{ image: 'assets/img/gallery/strategy.jpeg', title: 'Strategi Marketing', price: 25, url: '/' },
		{ image: 'assets/img/gallery/tiktok.jpeg', title: 'Tiktok Marketing', price: 10, url: '/' },
	];

	return (
		<>
			<SectionMarketing />
			{/* <PopularItemsList items={marketingItems} /> */}

			<div className='container py-5'>
				{/* {JSON.stringify(marketingItems)} */}

				<div className='row'>
					{marketingItems.map((item, index) => (
						<div className='col-md-4 border'>
							<div>{JSON.stringify(item)}</div>
							<div>{item.title}</div>
							<div>{item.price}</div>
							<div>{item.url}</div>
							<div>{item.image}</div>
						</div>
					))}
				</div>
			</div>

			<div className='container py-5 popular-items'>
				{/* {JSON.stringify(marketingItems)} */}

				<div className='row'>
					{marketingItems.map((item, index) => (
						<div className='col-md-4'>
							<CourseComponent url={item.url} imageSrc={item.image} title={item.title} price={item.price}/>
						</div>
					))}
				</div>
			</div>

			<div className='container py-5'>
				<div className='row'>
					<div className='col-md-4 border'>
						a
					</div>
					<div className='col-md-4 border'>
						a
					</div>
					<div className='col-md-4 border'>
						a
					</div>
				</div>
			</div>
		</>
	);
};

export default MarketingPage