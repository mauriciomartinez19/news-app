import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";

import './topNav.css'

const TopNavBar = () => {

    const [userName, setUserName] = useState(false)

    const logout = () => {
        localStorage.removeItem('token')
        setUserName(false)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            let decoded = jwt_decode(token)
            const name = decoded.name
            setUserName(name)
        }
    }, [])

    return <>
        <div className='top-navbar-box'>
            <img className='logo-navbar' src={require('../assets/navbar/logotype.png')} alt='news-logo' />
            <div className='navbar-title-box'>
                <a href='/' className='navbar-title-a-tag'>
                    <h2 className='navbar-title'>NEWS</h2>
                </a>
            </div>
            <div className='navbar-title-box'>
                <a href='/login' className='navbar-title-a-tag'>
                    {userName
                        ? userName
                        : 'Sign in'}
                </a>
                {userName
                    ? <section className='top-navbar-logout-box'>
                        <button className='top-navbar-logout-button' onClick={logout}>logOut</button>
                    </section>
                    : <></>}

            </div>
        </div>
    </>
}

export default TopNavBar