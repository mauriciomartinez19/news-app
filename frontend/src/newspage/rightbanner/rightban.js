
import './rightbanner.css'


const RightBanner = ({ top, bot }) => {

    return <>
        <div className='news-right-banner-box'>
            <div className='right-banner-top'>
                <img className='right-banner-top-img' src={top.image} />
                <h3 className='right-banner-top-title'>{top.title ? top.title.substring(0, 30) : top.title}</h3>
                <div className='right-banner-top-tags'>
                    <h6 className='right-banner-top-list'>{top.date}</h6>
                    <h6 className='right-banner-top-list'>{top.tag}</h6>
                </div>
            </div>
            <div className='right-banner-bot'>
                {bot.map((notice, i) => {
                    const { title, image } = notice
                    return <>
                        <div key={i} className='right-banner-bot-notice'>
                            <img className='right-banner-bot-img' src={image} />
                            <h4 className='right-banner-bot-title'>{title}</h4>
                        </div>
                    </>
                })}
            </div>
        </div>
    </>
}

export default RightBanner