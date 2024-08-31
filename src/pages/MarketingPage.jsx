import React from 'react'
import CourseComponent from '../components/CourseComponent';
import PageTitle from '../components/PageTitle';


const SectionMarketing = () => {
	const currency = '$'
	const marketingItems = [
		{ image: 'assets/img/gallery/bisnis.jpeg', title: 'Pengelolaan Bisnis', price: 35, url: '/' },
		{ image: 'assets/img/gallery/strategy.jpeg', title: 'Strategi Marketing', price: 25, url: '/' },
		{ image: 'assets/img/gallery/tiktok.jpeg', title: 'Tiktok Marketing', price: 10, url: '/' },
	];
	return (
        <div className='container popular-items py-5'>
            <div className="row">
                {marketingItems.map((item,index) => (
                    <div key={index} className="col-md-4">
                        <CourseComponent url={item.url} imageSrc={item.image} title={item.title} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const MarketingPage = () => {
	return (
		<>
			<PageTitle title={'Marketing'}/>
			<SectionMarketing/>
		</>
	)
}




export default MarketingPage