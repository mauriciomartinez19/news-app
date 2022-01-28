import './NewsPage.css'

//Pages
import New from './new/new'
import RightBanner from './rightbanner/rightban'

const NewsPage = () => {
    return <>
        <div className="NewsPage-box">
            <div className='News-page-zone'>
                <New />
                <RightBanner />
            </div>
        </div>
    </>
}

export default NewsPage