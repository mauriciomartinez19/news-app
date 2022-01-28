import './right.css'

const Right = () => {
    return <>
        <div className='home-down-right'>
            <div className='home-down-right-top'>
                <div className='home-down-right-top-navbar'>
                    <h4 className='top-navbar-box-title'>Stay in contact</h4>
                </div>
                <div className='home-down-right-top-icon-box'>
                    <img className='home-down-right-top-icon' src='/images/home/down-home/social/facebook-logo.png' />
                    <img className='home-down-right-top-icon' src='/images/home/down-home/social/instagram-logo.png' />
                    <img className='home-down-right-top-icon' src='/images/home/down-home/social/twitter-logo.png' />
                </div>
            </div>
            <div className='home-down-right-bot'>
                <img className='home-down-right-bot-img' src='./images/home/down-home/advertising/images.jpg' />
            </div>
        </div>
    </>
}

export default Right