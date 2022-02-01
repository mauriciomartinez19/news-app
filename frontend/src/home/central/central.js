
import './central.css'

const Central = ({ centerData }) => {
    return <>
        <div className='central-background'>

            <div className='central-box'>
                <a href={`/news/${centerData[2]._id}`} className='left-notice' style={{ backgroundImage: `url(${centerData[2].image})` }}>
                    <div className='shadow-notice-title'>
                        <p className='title-notice-sides' >{centerData[2].title}</p>
                    </div>
                </a>
                <div className='center-side'>
                    <a href={`/news/${centerData[4]._id}`} className='center-top-notice' style={{ backgroundImage: `url(${centerData[4].image})` }}>
                        <div className='shadow-notice-title'>
                            <p className='title-notice-sides'>{centerData[4].title}</p>
                        </div>
                    </a>
                    <div className='center-bot'>
                        <a href={`/news/${centerData[3]._id}`} className='center-bot-left' style={{ backgroundImage: `url(${centerData[3].image})` }}>
                            <div className='shadow-notice-title'>
                                <p className='title-notice-center-bottom'>{centerData[3].title}</p>
                            </div>
                        </a>
                        <a href={`/news/${centerData[0]._id}`} className='center-bot-right' style={{ backgroundImage: `url(${centerData[0].image})` }}>
                            <div className='shadow-notice-title'>
                                <p className='title-notice-center-bottom'>{centerData[0].title}</p>

                            </div>
                        </a>
                    </div>
                </div>
                <a href={`/news/${centerData[1]._id}`} className='right-side' style={{ backgroundImage: `url(${centerData[1].image})` }}>
                    <div className='shadow-notice-title'>
                        <p className='title-notice-sides'>{centerData[1].title}</p>
                    </div>
                </a>
            </div>
        </div>
    </>
}

export default Central