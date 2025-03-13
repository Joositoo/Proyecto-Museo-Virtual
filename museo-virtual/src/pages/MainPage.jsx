import React from 'react'
import Main from '../components/Main'

function MainPage(props) {
    return (
        <Main usuario={props.usuario} museos={props.museos} />
    )
}

export default MainPage