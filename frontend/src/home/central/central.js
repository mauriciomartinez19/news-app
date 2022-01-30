
import './central.css'

const Central = ({ centerData }) => {
    return <>
        <div className='central-background'>
            <div className='central-box'>
                <div className='left-notice' style={{ backgroundImage: `url(${centerData[2].image})` }}>
                    <div className='shadow-notice-title'>
                        <a className='title-notice-sides' href={`/news/${centerData[2]._id}`}>{centerData[2].title}</a>
                    </div>
                </div>
                <div className='center-side'>
                    <div className='center-top-notice' style={{ backgroundImage: `url(${centerData[4].image})` }}>
                        <div className='shadow-notice-title'>
                            <a href={`/news/${centerData[4]._id}`} className='title-notice-sides'>{centerData[4].title}</a>
                        </div>
                    </div>
                    <div className='center-bot'>
                        <div className='center-bot-left' style={{ backgroundImage: `url(${centerData[3].image})` }}>
                            <div className='shadow-notice-title'>
                                <a href={`/news/${centerData[3]._id}`} className='title-notice-center-bottom'>{centerData[3].title}</a>
                            </div>
                        </div>
                        <div className='center-bot-right' style={{ backgroundImage: `url(${centerData[0].image})` }}>
                            <div className='shadow-notice-title'>
                                <a href={`/news/${centerData[0]._id}`} className='title-notice-center-bottom'>{centerData[0].title}</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side' style={{ backgroundImage: `url(${centerData[1].image})` }}>
                    <div className='shadow-notice-title'>
                        <a href={`/news/${centerData[1]._id}`} className='title-notice-sides'>{centerData[1].title}</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Central