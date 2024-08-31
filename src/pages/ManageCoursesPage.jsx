import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { GoPencil } from "react-icons/go";
import { Link } from 'react-router-dom';

import ThumbnailImage from '../components/ThumbnailImage';


const PageContent = () => {

	const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [search, setSearch] = useState('')

	const fetchCourses = async () => {
		try {
			const response = await axios.get('http://localhost:3000/public/popular');
			// console.log(response.data)
			setCourses(response.data.data);
      setFilteredCourses(response.data.data)
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		fetchCourses()
	}, [])

  useEffect(() => {
    if (search === '') {
      setFilteredCourses(courses)
    } else {
      setFilteredCourses(
        courses.filter((item) =>
          item.course_name.toLowerCase().includes(search.toLowerCase())
        )
      )
    }
  }, [search])

  return (
    <>
      <div className="container popular-items py-10">
        <div className="row">
          <div className="col-12">
            <div className="section-tittle mb-70">
              <h2>Manage Courses</h2>
            </div>
            <div className="d-flex flex-between mb-3">
              <div>
                <Link to='/manage/courses/tambah'>
                  <button type="button" className='btn btn-primary'>Tambah data</button>
                </Link>
              </div>
              <div className='d-flex align-items-center gap-2' style={{ width: '280px' }}>
                <label htmlFor="search" className='form-label mb-0'>Search</label>
                <input id='search' type="search" className="form-control" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
              </div>
            </div>
            <div className="table-responsive table-wrapper border mb-5">
              {filteredCourses.length === 0 ?
                <div className="d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
                  <span className='text-muted' style={{ fontSize: '1.25rem' }}><i>No courses found.</i></span>
                </div>
              :
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Thumbnail</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Total Enrollments</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCourses.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><ThumbnailImage src={item.thumbnail} alt={item.course_name} /></td>
                        <td>{item.course_name}</td>
                        <td>{item.price}</td>
                        <td>{item.total_enrollments}</td>
                        {/* <td><pre>{JSON.stringify(item)}</pre></td> */}
                        <td>
                          <div className='d-flex gap-2'>
                            <Link to={`/manage/courses/${item.course_id}`}>
                              <GoPencil />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ManageCoursesPage = () => {

  return (
    <>
      <PageContent />
    </>
  )
}

export default ManageCoursesPage