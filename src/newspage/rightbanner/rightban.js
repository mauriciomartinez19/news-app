import './rightbanner.css'
import { data } from './data.js'

const RightBanner = () => {
    return <>
        <div className='news-right-banner-box'>
            <div className='right-banner-top'>
                <img className='right-banner-top-img' src='./images/home/china-demands.jpg' />
                <h3 className='right-banner-top-title'>China demands US halt Olympics 'interference'</h3>
                <div className='right-banner-top-tags'>
                    <h6 className='right-banner-top-list'>19.10.2021</h6>
                    <h6 className='right-banner-top-list'>Bussines</h6>
                </div>
            </div>
            <div className='right-banner-bot'>
                {data.map((notice, i) => {
                    const { title, img } = notice
                    return <>
                        <div className='right-banner-bot-notice'>
                            <img className='right-banner-bot-img' src={img} />
                            <h4 className='right-banner-bot-title'>{title}</h4>
                        </div>
                    </>
                })}
            </div>
        </div>
    </>
}

export default RightBanner