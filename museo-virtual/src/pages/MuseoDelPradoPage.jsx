import React from 'react'
import Museo from '../components/Museo'
import LasMeninas from '../images/LasMeninas.jpg'
import ElCaballeroDeLaManoEnElPecho from '../images/ElCaballeroDeLaManoEnElPecho.jpg'
import LaAnunciacion from '../images/LaAnunciacion.jpg'

function MuseoDelPradoPage(props) {
    const museo = {
        nombre: "Museo del Prado",
        descripcion: "Inaugurado en 1819, el Museo del Prado es uno de los museos de arte más importantes del mundo, con una vasta colección de pinturas europeas de los siglos XII al XX. Su colección incluye obras maestras de artistas como Velázquez (Las Meninas), Goya (La maja desnuda), El Greco y Rubens. Ubicado en Madrid, es el corazón del 'Paseo del Arte' y una visita obligada para los amantes de la pintura clásica."
    };

    const obras=[
        {
            obra: "Las Meninas",
            autor: "Diego Velázquez",
            imagen: LasMeninas
        },
        {
            obra: "El caballero de la mano en el pecho",
            autor: "El Greco",
            imagen: ElCaballeroDeLaManoEnElPecho
        },
        {
            obra: "La Anunciación",
            autor: "Fra Angelico",
            imagen: LaAnunciacion
        }
    ]

    return (
        <Museo usuario={props.usuario} museos={props.museos} museo={museo} obras={obras} />
    )
}

export default MuseoDelPradoPage