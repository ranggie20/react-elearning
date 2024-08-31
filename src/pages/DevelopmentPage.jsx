import React from 'react'
import CourseComponent from '../components/CourseComponent';
import PageTitle from '../components/PageTitle'

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

const DevelopmentPage = () => {

    return (
        <>
             <PageTitle title={'Development'}/>
            <SectionCourse />
        </>
    );
};

export default DevelopmentPage