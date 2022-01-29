import './left.css'
import DownNavbar from './down-navbar'
import { data } from './data-left-list'

const Left = () => {
    return <div className='whole-home-down-left'>
        <DownNavbar />
        <div className='home-down-left'>
            <div className='home-down-left-left'>
                <div className='home-down-left-left-box-img'>
                    <img src='./images/home/down-home/cue-the-music.jpg' className='home-down-left-left-img' />
                </div>
                <div className='home-down-left-left-text'>
                    <h3 className='home-down-left-left-text-title'>New Cue the music: former Q editors join newsletter publishing boom</h3>
                    <p className='home-down-left-left-text-subtitle'>After the Bauer Media music title’s pandemic-triggered demise last July, Q’s former staff are launching a weekly direct-to-inbox publication</p>
                    <h6 className='home-down-left-left-text-date'>Date: 19.02.2022</h6>
                </div>
            </div>
            <div className='home-down-left-rigt'>
                {data.map(info => {
                    const { title, image, date } = info
                    return <a href='/' className='home-down-left-rigt-a-tag'>
                        <div className='home-down-left-rigt-notice'>
                            <img src={image} className='home-down-left-rigt-notice-img' />
                            <div className='home-down-left-rigt-notice-text'>
                                <h4 className='home-down-left-rigt-notice-title'>{title}</h4>
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