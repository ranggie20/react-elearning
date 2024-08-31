import React, { useState, useEffect } from 'react';
import CourseComponent from '../components/CourseComponent';
import { useParams } from 'react-router-dom'
import Error404 from './404Page';
import axios from '../api/axios';
import PageTitle from '../components/PageTitle';

const SectionCourse = () => {

    const params = useParams()
    const [courses, setCourses] = useState([]);
    
	const fetchData = async function () {
		try {
			const response = await axios.get(`/public/get-category/${params.id}`);
			console.log("courses",response.data)
			setCourses(response.data.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

    return (
        <div className='container popular-items py-5'>
            <div className="row">
                {courses.map((item,index) => (
                    <div key={index} className="col-md-4">
                        <CourseComponent url={`/course/${item.course_id}`} imageSrc={item.thumbnail.String} title={item.course_name} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const CategoryPage = () => {
    const params = useParams()

    const [category, setCategory] = useState({});
    const [categories, setCategories] = useState({});
    const [availableCategory, setAvailableCategory] = useState([]);

	const fetchDataCategories = async function () {
		try {
			const response = await axios.get(`/public/category`);
			// console.log(response.data)
			setCategories(response.data.data);
            setAvailableCategory(response.data.data.map(item => `${item.category_id}`))
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	const fetchDataCategory = async function () {
		try {
			const response = await axios.get(`/public/category/${params.id}`);
			// console.log(response.data)
			setCategory(response.data.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchDataCategory()
        fetchDataCategories()
	}, [])

    return (
        <>
            {availableCategory.includes(params.id) ? 
                <>
                    <PageTitle title={category.category_name} />
                    <SectionCourse />
                </>
            : 
                <Error404/>
            }
        </>
    );
};

export default CategoryPage