import React from 'react'
import Login from '../components/LogIn'

function LoginPage(props) {
    return (
        <Login onLogin={props.onLogin} />
    )
}

export default LoginPage