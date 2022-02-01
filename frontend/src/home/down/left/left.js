import { useState, useEffect } from 'react'
import './left.css'
import DownNavbar from './down-navbar'

const Left = () => {
    const [tag, setTag] = useState('general')
    const [principal, setPrincipal] = useState({})
    const [list, setList] = useState([])

    const handleClick = (e) => {
        setTag(e.target.value)
    }

    const getNews = async () => {
        const response = await fetch('http://localhost:5000/api/news/tag/' + tag)
        const data = await response.json()
        const first = data.shift()
        setPrincipal(first)
        setList(data)
    }

    useEffect(() => {
        getNews()
    }, [tag])

    return <div className='whole-home-down-left'>
        <DownNavbar
            handleClick={handleClick} />
        <div className='home-down-left'>
            <a href={`/news/${principal._id}`} className='home-down-left-left'>
                <div className='home-down-left-left-box-img'>
                    <img src={principal.image} className='home-down-left-left-img' alt='top-general-notice' />
                </div>
                <div className='home-down-left-left-text'>
                    <h3 className='home-down-left-left-text-title'>{principal.title}</h3>
                    <p className='home-down-left-left-text-subtitle'>{principal.resume}</p>
                    <h6 className='home-down-left-left-text-date'>Date: {principal.date}</h6>
                </div>
            </a>
            <div className='home-down-left-rigt'>
                {list.map(info => {
                    const { title, image, date, _id } = info
                    return <a href={`/news/${_id}`} className='home-down-left-rigt-a-tag'>
                        <div className='home-down-left-rigt-notice'>
                            <img src={image} className='home-down-left-rigt-notice-img' />
                            <div className='home-down-left-rigt-notice-text'>
                                <h4 className='home-down-left-rigt-notice-title'>{title ? title.substring(0, 60) : ''}</h4>
                                <h6 className='home-down-left-rigt-notice-date'>{date}</h6>
                            </div>
                        </div>
                    </a>
                })
                }
            </div>
        </div>
    </div>
}

export default Left