import './central.css'

const Central = () => {
    return <>
        <div className='central-background'>
            <div className='central-box'>
                <div className='left-notice' style={{ backgroundImage: `url("./images/home/olimic.jpg")` }}>
                    <div className='shadow-notice-title'>
                        <a className='title-notice-sides'>25 athletes to watch in the Beijing Winter Olympics</a>
                    </div>
                </div>
                <div className='center-side'>
                    <div className='center-top-notice' style={{ backgroundImage: `url("./images/home/justice.png")` }}>
                        <div className='shadow-notice-title'>
                            <a className='title-notice-sides'>Why climate change is inherently racist</a>
                        </div>
                    </div>
                    <div className='center-bot'>
                        <div className='center-bot-left' style={{ backgroundImage: `url("./images/home/quantum.jpg")` }}>
                            <div className='shadow-notice-title'>
                                <a className='title-notice-center-bottom'>What is the quantum apocalypse and should we be scared?</a>
                            </div>
                        </div>
                        <div className='center-bot-right' style={{ backgroundImage: `url("./images/home/singer.jpg")` }}>
                            <div className='shadow-notice-title'>
                                <a className='title-notice-center-bottom'>Mary J. Blige on why 'Family Affair' is the perfect song for the Super Bowl halftime show</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side' style={{ backgroundImage: `url("./images/home/dad-kid.jpg")` }}>
                    <div className='shadow-notice-title'>
                        <a className='title-notice-sides'>Dad's pandemic poem captures the highs and lows of quarantine scare</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Central