import { useState, useEffect } from 'react'
import './NewsPage.css'

//Pages
import New from './new/new'
import RightBanner from './rightbanner/rightban'



const id = '61f5b7bd0530758773ea9f05'

const NewsPage = () => {

    const [news, setNews] = useState({})
    const [content, setContent] = useState([])
    const [top, setTop] = useState('')
    const [bot, setBot] = useState([])

    const getNews = async () => {
        const response = await fetch('http://localhost:5000/api/news/' + id)
        const data = await response.json()
        setNews(data)
        setContent(data.content)
    }

    const getLatest = async () => {
        const num = 5
        const response = await fetch('http://localhost:5000/api/news/lastest/' + num)
        const data = await response.json()
        const top = data.shift()
        setTop(top)
        setBot(data)
    }

    useEffect(() => {
        getNews()
        getLatest()
    }, [])

    return <>
        <div className="NewsPage-box">
            <div className='News-page-zone'>
                <New
                    news={news}
                    content={content} />
                <RightBanner
                    top={top}
                    bot={bot} />
            </div>
        </div>
    </>
}

export default NewsPage