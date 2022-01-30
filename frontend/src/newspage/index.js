import { useState, useEffect } from 'react'
import './NewsPage.css'

//Pages
import New from './new/new'
import RightBanner from './rightbanner/rightban'


const id = '61f5b7bd0530758773ea9f05'

const NewsPage = () => {

    const [news, setNews] = useState({})
    const [content, setContent] = useState([])

    const getNews = async () => {
        const response = await fetch('http://localhost:5000/api/news/' + id)
        const data = await response.json()
        setNews(data)
        setContent(data.content)
    }

    useEffect(() => {
        getNews()
    }, [])

    return <>
        <div className="NewsPage-box">
            <div className='News-page-zone'>
                <New
                    news={news}
                    content={content} />
                <RightBanner />
            </div>
        </div>
    </>
}

export default NewsPage