import React from 'react'
import './PieDePagina.css'
import { Link } from 'react-router-dom';

function PieDePagina(props) {
    const infoProyecto = ["Sobre nosotros", "Equipo de trabajo", "Colaboradores", "Política de privacidad", "Términos y condiciones"];
    const redesSociales = ["Instagram", "FaceBook", "Twitter", "Pinterest", "YouTube"];

    const enlaceRedes = ["https://www.instagram.com/", "https://www.facebook.com/?locale=es_ES", "https://x.com/?lang=es", "https://es.pinterest.com/", "https://www.youtube.com/"]

    return (
        <>
            <div className='colorFondo'>
                <div className='containerFooter'>
                    <div>
                        <ul>
                            <Link to={'/'}><li>Inicio</li></Link>
                            {
                                props.museos.map((museo, index) => {
                                    return <Link to={`/${index + 1}`}><li key={index + 1}>{museo}</li></Link>
                                })
                            }
                            <Link to='/galeria'><li>Galería de imágenes</li></Link>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            {
                                infoProyecto.map(info => {
                                    return <Link to={''}><li key={info}>{info}</li></Link>
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <ul>
                            {
                                redesSociales.map((redes, index) => {
                                    return <Link to={enlaceRedes[index]}><li key={redes}>{redes}</li></Link>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PieDePagina