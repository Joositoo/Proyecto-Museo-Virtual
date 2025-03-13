import React from 'react'
import PieDePagina from './PieDePagina'
import Galeria from './Galeria'
import Menu from './Menu'

function GaleriaDeImagenes(props) {
    return (
        <>
            <Menu usuario={props.usuario} museos={props.museos} />
            <h3 className='titleGaleria'>Galería de imagenes</h3>
            <Galeria />
            <PieDePagina museos={props.museos} />
        </>
    )
}

export default GaleriaDeImagenes