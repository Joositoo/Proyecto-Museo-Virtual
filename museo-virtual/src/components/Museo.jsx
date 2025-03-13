import React from 'react'
import Menu from './Menu'
import PieDePagina from './PieDePagina'
import CartasMuseos from './CartasMuseos'
import './Museo.css'




function MuseoDelPrado(props) {
	return (
		<>
			<Menu museos={props.museos} usuario={props.usuario} />

			<div className='infoMuseo'>
				<h2 className='nombreMuseo'>{props.museo.nombre}</h2>
				<p>{props.museo.descripcion}</p>
			</div>

			<div className='content'>
				<div className='containerObras'>
					<h3>Obras más importantes:</h3>
					<div className='flexObras'>
						{props.obras.map((obra, index) => {
							return (
								<div>
									<img className='imagenObra' src={obra.imagen} />
									<h5 key={index}>{obra.obra} - {obra.autor}</h5>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<CartasMuseos museos={props.museos} />
			<PieDePagina museos={props.museos} />
		</>
	)
}

export default MuseoDelPrado