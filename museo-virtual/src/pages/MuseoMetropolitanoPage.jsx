import React from 'react'
import Museo from '../components/Museo'
import LaNocheEstrellada from '../images/LaNocheEstrellada.webp'
import LaJovenDeLaPerla from '../images/LaJovenDeLaPerla.jpg'
import ElRegresoDelHijoProdigo from '../images/ElRegresoDelHijoProdigo.jpg'

function MuseoMetropolitanoPage(props) {
    const museo = {
        nombre: "Museo Metropolitano de Arte",
        descripcion: "Conocido como el Met, este museo es el más grande de Estados Unidos y uno de los más prestigiosos del mundo. Fundado en 1870 en Nueva York, su colección abarca más de 5,000 años de historia del arte, con obras desde la antigüedad hasta la contemporaneidad. Entre sus piezas más destacadas se encuentran Autorretrato con sombrero de paja de Van Gogh, El templo de Dendur (una construcción egipcia real) y una de las mejores colecciones de arte asiático y armaduras medievales."
    };

    const obras = [
        {
            obra: "La noche estrellada",
            autor: "Vincent Van Gogh",
            imagen: LaNocheEstrellada
        },
        {
            obra: "La joven de la perla",
            autor: "Johannes Vermeer",
            imagen: LaJovenDeLaPerla
        },
        {
            obra: "El regreso del hijo pródigo",
            autor: "Rembrandth",
            imagen: ElRegresoDelHijoProdigo
        }
    ]

    return (
        <Museo usuario={props.usuario} museos={props.museos} museo={museo} obras={obras} />
    )
}

export default MuseoMetropolitanoPage