
import './rightbanner.css'


const RightBanner = ({ banner }) => {
    const top = banner.shift(banner)
    return <>
        <div className='news-right-banner-box'>
            <a href={`/news/${top._id}`} className='right-banner-top'>
                <img className='right-banner-top-img' src={top.image} />
                <h3 className='right-banner-top-title'>{top.title ? top.title.substring(0, 30) : top.title}</h3>
                <div className='right-banner-top-tags'>
                    <h6 className='right-banner-top-list'>{top.date}</h6>
                    <h6 className='right-banner-top-list'>{top.tag}</h6>
                </div>
            </a>
            <div className='right-banner-bot'>
                {banner.map((notice, i) => {
                    const { title, image, _id } = notice
                    return <>
                        <a href={`/news/${_id}`} key={i} className='right-banner-bot-notice'>
                            <img className='right-banner-bot-img' src={image} />
                            <h4 className='right-banner-bot-title'>{title}</h4>
                        </a>
                    </>
                })}
            </div>
        </div>
    </>
}

export default RightBanner