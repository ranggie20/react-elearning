import PageTitle from '../components/PageTitle'
import CourseComponent from '../components/CourseComponent';

const SectionSoftware = () => {
    const SoftwareItems = [
        { image: 'assets/img/gallery/microcontroller.jpeg', title: 'Mikrokontroler', price: 35, url: 'basic_game_details.html' },
        { image: 'assets/img/gallery/server.jpeg', title: 'Windows Server', price: 25, url: 'cyber_security_details.html' },
        { image: 'assets/img/gallery/cyber.jpeg', title: 'Cyber Security', price: 10, url: 'windows_details.html' },
    ];

    return (
        <div className='container popular-items py-5'>
            <div className="row">
                {SoftwareItems.map((item,index) => (
                    <div key={index} className="col-md-4">
                        <CourseComponent url={item.url} imageSrc={item.image} title={item.title} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}


const SoftwarePage = () => {
        return (
            <>
                <PageTitle title={'IT&Software'}/>
                <SectionSoftware/>
            </>
        )
}


export default SoftwarePage