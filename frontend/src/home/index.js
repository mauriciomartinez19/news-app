import './home.css'

import Central from './central/central'
import Down from './down/down'

const Home = () => {
    return <>
        <div className='back-whole-page'>
            <Central />
            <Down />
        </div>
    </>
}

export default Home