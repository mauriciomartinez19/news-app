import './down-navbar.css'

const DownNavbar = ({ handleClick }) => {
    return <>
        <div className='down-navbar-box'>
            <button className='down-navbar-box-title' value='general' onClick={e => handleClick(e)}>Top</button>
            <button className='down-navbar-box-title' value='bussines' onClick={e => handleClick(e)}>Bussines</button>
            <button className='down-navbar-box-title' value='show' onClick={e => handleClick(e)}>Show</button>
            <button className='down-navbar-box-title' value='sports' onClick={e => handleClick(e)}>Sports</button>
            <button className='down-navbar-box-title' value='technology' onClick={e => handleClick(e)}>Technology</button>
            <button className='down-navbar-box-title' value='health' onClick={e => handleClick(e)}>Health</button>
        </div>
    </>
}

export default DownNavbar