import React from 'react'
import GaleriaDeImagenes from '../components/GaleriaDeImagenes'

function GaleriaDeImagenesPage(props) {
    return (
        <GaleriaDeImagenes usuario={props.usuario} museos={props.museos} />
    )
}

export default GaleriaDeImagenesPage