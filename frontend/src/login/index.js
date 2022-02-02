import { useState } from "react"
import FormPage from "./FormPage"

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const mes = {
            name: name,
            password: password
        }
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        })
        const data = await response.json()
        if (data.user) {
            localStorage.setItem('token', data.user)
            window.location.href = '/'
        } else {
            alert(`${data.status}, please try again`)
        }
        setName('')
        setPassword('')
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
                formName: 'Password',
                placeholder: 'insert your Password',
                defaultValue: password,
                handleChange: setPassword,
                type: 'password'
            }

        ]

    const secondButton =
    {
        href: "/create-user",
        buttonName: 'Create new user'
    }


    return (
        <FormPage
            title='LogIn'
            handleSubmit={handleSubmit}
            formLabels={formLabels}
            buttonTitle='Log in'
            secondButton={secondButton}
        />
    )
}

export default Login


