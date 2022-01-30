import { useState, useEffect } from 'react'
import './home.css'

import Loading from '../loading/loading'
import Central from './central/central'
import Down from './down/down'

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [centerData, setCenterData] = useState([])

    const getLatest = async () => {
        setIsLoading(true)
        const num = 5
        const response = await fetch('http://localhost:5000/api/news/latest/' + num)
        const data = await response.json()
        setCenterData(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getLatest()
    }, [])

    return <>
        {isLoading
            ? <Loading />
            : <div className='back-whole-page'>
                <Central
                    centerData={centerData} />
                <Down />
            </div>}

    </>
}

export default Home