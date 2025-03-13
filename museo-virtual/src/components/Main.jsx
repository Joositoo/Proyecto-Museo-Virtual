import React from 'react'
import PieDePagina from './PieDePagina'
import Menu from './Menu'
import Carrousel from './Carrousel'
import CartasMuseos from './CartasMuseos'

function Main(props) {
    return (
        <>
            <Menu museos={props.museos} usuario={props.usuario} />
            <Carrousel />
            <CartasMuseos museos={props.museos} />
            <PieDePagina museos={props.museos} />
        </>
    )
}

export default Main