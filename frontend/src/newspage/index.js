import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './NewsPage.css'

//Pages
import Loading from '../loading/loading'
import New from './new/new'
import RightBanner from './rightbanner/rightban'


const NewsPage = () => {

    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [news, setNews] = useState({})
    const [banner, setBanner] = useState([])

    const getNews = async () => {
        setIsLoading(true)
        const response = await fetch('http://localhost:5000/api/news/' + id)
        const data = await response.json()
        setNews(data)
        const num = 5
        const secondResponse = await fetch('http://localhost:5000/api/news/oldest/' + num)
        const secondData = await secondResponse.json()
        setBanner(secondData)
        setIsLoading(false)
    }

    useEffect(() => {
        getNews()
    }, [])

    return <>
        {isLoading
            ? <Loading />
            : <div className="NewsPage-box">
                <div className='News-page-zone'>
                    <New
                        news={news} />
                    <RightBanner
                        banner={banner} />
                </div>
            </div>}

    </>
}

export default NewsPage