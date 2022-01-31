import { useState } from "react"


const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }

    return <>
        <div className="create-user-page">
            <div className='create-user-box'>
                <form className="create-user-box-form" onSubmit={handleSubmit}>
                    <h3 className='create-user-box-title'>Create your User</h3>
                    <div className='create-user-input-box'>
                        <label className='create-user-input-name'>Name</label>
                        <input
                            className='create-user-input'
                            placeholder='insert your name'
                            onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className='create-user-input-box'>
                        <label className='create-user-input-name'>Password</label>
                        <input
                            className='create-user-input'
                            placeholder='insert your email'
                            type='password'
                            onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button className='create-user-btn'>Log in</button>
                </form>
                <a href="/create-user" className="create-new-user-btn-tag-a">
                    <button className='create-new-user-btn'>Create new User</button>
                </a>
            </div>
        </div>
    </>
}

export default Login