import React, { useState, useEffect } from 'react';
import CourseComponent from '../components/CourseComponent';
import { useParams } from 'react-router-dom'
import Error404 from './404Page';
import axios from 'axios';

const SectionCourse = () => {
    
    const developmentsItems = [
        { image: 'assets/img/gallery/gallery1.jpeg', title: 'Basics of Game Development', price: 35, url: '/' },
        { image: 'assets/img/gallery/java.jpeg', title: 'Java Programming', price: 25, url: '/' },
        { image: 'assets/img/gallery/html.jpeg', title: 'Web Development', price: 10, url: '/' },
    ];

    return (
        <div className='container popular-items py-5'>
            <div className="row">
                {developmentsItems.map((item,index) => (
                    <div key={index} className="col-md-4">
                        <CourseComponent url={item.url} imageSrc={item.image} title={item.title} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const SectionName = () => {
    
    const params = useParams()
    const [currentCategory, setCurrentCategory] = useState({});

    useEffect(()=>{
        console.log("params", params)
    },[])


	const fetchDataCategory = async function () {
		try {
			const response = await axios.get('http://192.168.1.16:3000/public/category');
			console.log(response.data.data)
			// setCategories(response.data.data);

            const data = response.data.data.find(item => {
                // console.log(item, params.id)
                return item.category_id.toString() === params.id
            })
            setCurrentCategory(data)
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchDataCategory()
	}, [])

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    
	return (
        <>
            <div className="slider-area ">
				<div className="single-slider slider-height2 d-flex align-items-center">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="hero-cap text-center">
									<h2>{currentCategory?.category_name}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
        	</div>
        </>
    )
}

const CategoryPage = () => {
    const params = useParams()

    const [category, setCategory] = useState({});

	const fetchDataCategory = async function () {
		try {
			const response = await axios.get(`http://192.168.1.16:3000/public/category/${params.id}`);
			// console.log(response.data)
			setCategory(response.data.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchDataCategory()
	}, [])

    const availableCategory = ['9','10','12']

    return (
        <>
            {availableCategory.includes(params.id) ? 
                <>
                    <SectionName/>
                    <SectionCourse />
                </>
            : 
                <Error404/>
            }
        </>
    );
};

export default CategoryPage