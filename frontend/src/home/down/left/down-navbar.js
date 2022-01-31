import { useState } from 'react'
import './down-navbar.css'

const DownNavbar = ({ handleClick }) => {
    const [showList, setShowList] = useState(false)
    return <>
        <div className='down-navbar-box'>
            <ButtonsNavbar
                handleClick={handleClick} />
            <div className='button-navbar-box'>
                <img
                    className='down-navbar-img'
                    src='./images/home/down-home/navbar/list-icon.png'
                    alt='list-icon'
                    onClick={() => { setShowList(!showList) }}>
                </img>
                {showList
                    ? <section className='down-navbar-select-box'>
                        <button className='down-navbar-box-title-list' value='general'
                            onClick={e => {
                                handleClick(e)
                                setShowList(!showList)
                            }}>Top</button>
                        <button className='down-navbar-box-title-list' value='bussines' onClick={e => {
                            handleClick(e)
                            setShowList(!showList)
                        }}>Bussines</button>
                        <button className='down-navbar-box-title-list' value='show' onClick={e => {
                            handleClick(e)
                            setShowList(!showList)
                        }}>Show</button>
                        <button className='down-navbar-box-title-list' value='sports' onClick={e => {
                            handleClick(e)
                            setShowList(!showList)
                        }}>Sports</button>
                        <button className='down-navbar-box-title-list' value='technology' onClick={e => {
                            handleClick(e)
                            setShowList(!showList)
                        }}>Technology</button>
                        <button className='down-navbar-box-title-list' value='health' onClick={e => {
                            handleClick(e)
                            setShowList(!showList)
                        }}>Health</button>
                    </section>
                    : <></>}
            </div>
        </div>
    </>
}

const ButtonsNavbar = ({ handleClick }) => {
    return <>
        <button className='down-navbar-box-title' value='general' onClick={e => handleClick(e)}>Top</button>
        <button className='down-navbar-box-title' value='bussines' onClick={e => handleClick(e)}>Bussines</button>
        <button className='down-navbar-box-title' value='show' onClick={e => handleClick(e)}>Show</button>
        <button className='down-navbar-box-title' value='sports' onClick={e => handleClick(e)}>Sports</button>
        <button className='down-navbar-box-title' value='technology' onClick={e => handleClick(e)}>Technology</button>
        <button className='down-navbar-box-title' value='health' onClick={e => handleClick(e)}>Health</button>
    </>
}

export default DownNavbar