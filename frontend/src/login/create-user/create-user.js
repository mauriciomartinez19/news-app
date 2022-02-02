import { useState } from 'react'
import FormPage from '../FormPage'

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

    const formLabels =
        [
            {
                formName: 'Name',
                placeholder: 'insert your Name',
                defaultValue: name,
                handleChange: setName
            },
            {
                formName: 'Email',
                placeholder: 'inser your email',
                defaultValue: email,
                handleChange: setEmail,
                type: 'email'
            },
            {
                formName: 'Password',
                placeholder: 'insert your Password',
                defaultValue: password,
                handleChange: setPassword,
                type: 'password'
            }

        ]

    return (
        <FormPage
            title='Create user'
            handleSubmit={handleSubmit}
            formLabels={formLabels}
            buttonTitle='Create user'
        />
    )
}
export default CreateUser