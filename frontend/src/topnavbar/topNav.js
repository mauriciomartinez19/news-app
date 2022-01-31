import './topNav.css'

const TopNavBar = () => {
    return <>
        <div className='top-navbar-box'>
            <img className='logo-navbar' src='./images/navbar/logotype.png' />
            <div className='navbar-title-box'>
                <a href='/' className='navbar-title-a-tag'>
                    <h2 className='navbar-title'>NEWS</h2>
                </a>
            </div>
            <div className='navbar-title-box'>
                <a href='/login' className='navbar-title-a-tag'>
                    Sign in
                </a>
            </div>

        </div>
    </>
}

export default TopNavBar