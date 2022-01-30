import { useState } from 'react'

import './createUser.css'

const CreateUser = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const mes = {
            name: name,
            email: email,
            password: password
        }
        const response = await fetch('http://localhost:5000/api/users/create-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        })
        const data = await response.json()
        console.log(data)
    }

    return <>
        <div className="create-user-page">
            <form className='create-user-box' onSubmit={handleSubmit}>
                <h3 className='create-user-box-title'>Create your User</h3>
                <div className='create-user-input-box'>
                    <label className='create-user-input-name'>Name</label>
                    <input
                        className='create-user-input'
                        placeholder='insert your name'
                        onChange={e => setName(e.target.value)}></input>
                </div>
                <div className='create-user-input-box'>
                    <label className='create-user-input-name'>Email</label>
                    <input
                        className='create-user-input'
                        placeholder='insert your email'
                        type='email'
                        onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className='create-user-input-box'>
                    <label className='create-user-input-name'>Password</label>
                    <input
                        className='create-user-input'
                        placeholder='insert your email'
                        type='password'
                        onChange={e => setPassword(e.target.value)}></input>
                </div>
                <button className='create-user-btn'>Create User</button>
            </form>
        </div>
    </>
}
export default CreateUser