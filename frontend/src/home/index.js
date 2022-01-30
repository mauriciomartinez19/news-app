import { useState, useEffect } from 'react'
import './home.css'

import Central from './central/central'
import Down from './down/down'

const Home = () => {
    const [first, setFirst] = useState([])
    const [second, setSecond] = useState([])
    const [third, setThird] = useState([])
    const [fourth, setFourth] = useState([])
    const [fifth, setFifth] = useState([])
    const getLatest = async () => {
        const num = 5
        const response = await fetch('http://localhost:5000/api/news/latest/' + num)
        const data = await response.json()
        setFirst(data[0])
        setSecond(data[1])
        setThird(data[2])
        setFourth(data[3])
        setFifth(data[4])
    }

    useEffect(() => {
        getLatest()
    }, [])

    return <>
        <div className='back-whole-page'>
            <Central
                first={first}
                second={second}
                third={third}
                fourth={fourth}
                fifth={fifth} />
            <Down />
        </div>
    </>
}

export default Home