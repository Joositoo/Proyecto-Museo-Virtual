import React from 'react'
import meninas from '../images/LasMeninas.jpg'
import caballero from '../images/ElcaballeroDeLaManoEnElPecho.jpg'
import anunciacion from '../images/LaAnunciacion.jpg'
import monaLisa from '../images/LaMonaLisa.jpg'
import libertadGuiando from '../images/LaLibertadGuiandoAlPueblo.jpg'
import bodasCana from '../images/LasBodasDeCana.jpg'
import nocheEstrellada from '../images/LaNocheEstrellada.webp'
import jovenDeLaPerla from '../images/LaJovenDeLaPerla.jpg'
import elRegresoDelHijo from '../images/ElRegresoDelHijoProdigo.jpg'
import '../components/Galeria.css'

function Galeria() {
	const imagenes = [meninas, caballero, anunciacion, monaLisa, libertadGuiando, bodasCana, nocheEstrellada, jovenDeLaPerla, elRegresoDelHijo];
	const obra = ["Las Meninas - Diego Velázquez", "El caballero de la mano en el pecho - El Greco", "La Anunciación - Fra Angelico", "La Mona Lisa - Leonardo da Vinci", "La Libertad guiando al pueblo - Eugène Delacroix", "Las Bodas de Caná - Paolo Veronese", "La noche estrellada - Vincent Van Gogh", "La joven de la perla - Johannes Vermeer", "El regreso del hijo pródigo - Rembrandth"];


	return (
		<div className='contentImg'>
			<div className='galeria'>
				{imagenes.map((imagen, index) => {
					return (
						<div className='obra'>
							<img className='imagenObra' src={imagen} />
							<h5 key={index}>{obra[index]}</h5>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default Galeria