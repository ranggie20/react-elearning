import { useEffect, useState } from "react"
import PageTitle from "../components/PageTitle"
import axios from "../api/axios"
import CategoryComponent from "../components/CategoryComponent"

const SectionCategoryList = () => {
    const [categoryList, setCategoryList] = useState([])

    const fetchCategories = async () => {
        try {
            const response = await axios.get("/public/category")

            setCategoryList(response.data.data || [])
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])
    
    return (
        <div className='container popular-items py-5'>
            <div className="row">
                {categoryList.map((item) => (
                    <div key={item.category_id} className="col-md-4">
                        <CategoryComponent url={`/category/${item.category_id}`} title={item.category_name} image={`${import.meta.env.VITE_API_URL}/${item.icon}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const CategoryListPage = () => {
    return (
        <>
            <PageTitle title={"Categories"} />
            <SectionCategoryList />
        </>
    )
}

export default CategoryListPage