
import './central.css'

const Central = ({ first, second, third, fourth, fifth }) => {
    console.log(first, second, third, fourth, fifth)
    return <>
        <div className='central-background'>
            <div className='central-box'>
                <div className='left-notice' style={{ backgroundImage: `url("./images/home/olimic.jpg")` }}>
                    <div className='shadow-notice-title'>
                        <a className='title-notice-sides' href={`/news/${third._id}`}>{third.title}</a>
                    </div>
                </div>
                <div className='center-side'>
                    <div className='center-top-notice' style={{ backgroundImage: `url("./images/home/justice.png")` }}>
                        <div className='shadow-notice-title'>
                            <a href={`/news/${fifth._id}`} className='title-notice-sides'>{fifth.title}</a>
                        </div>
                    </div>
                    <div className='center-bot'>
                        <div className='center-bot-left' style={{ backgroundImage: `url("./images/home/quantum.jpg")` }}>
                            <div className='shadow-notice-title'>
                                <a href={`/news/${fourth._id}`} className='title-notice-center-bottom'>{fourth.title}</a>
                            </div>
                        </div>
                        <div className='center-bot-right' style={{ backgroundImage: `url("./images/home/singer.jpg")` }}>
                            <div className='shadow-notice-title'>
                                <a href={`/news/${first._id}`} className='title-notice-center-bottom'>{first.title}</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side' style={{ backgroundImage: `url("./images/home/dad-kid.jpg")` }}>
                    <div className='shadow-notice-title'>
                        <a href={`/news/${second._id}`} className='title-notice-sides'>{second.title}</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Central