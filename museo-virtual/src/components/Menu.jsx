import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu(props) {
    return (
        <div className='colorFondoMenu'>
            <div className='containerMenu'>
                <div></div>
                <div>
                    <h1>LAS OBRAS DE ARTE MÁS EMBLEMÁTICAS DE CADA MUSEO</h1>
                </div>

                <div>
                    {
                        props.usuario.usuario != "" ? (
                            <p>Bienvenido, {props.usuario.usuario}</p>
                        ) : (
                            <p>Inicia sesión <Link to='/login'>aquí.</Link></p>
                        )
                    }
                </div>
            </div>

            <div>
                <ul className='listaMenu'>
                    <Link to="/"><li>Inicio</li></Link>
                    {
                        props.museos.map((museo, index) => {
                            return <Link to={`/${index + 1}`}><li key={index+1}>{museo}</li></Link>
                        })
                    }
                    <Link to='/galeria'><li>Galería de imágenes</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Menu