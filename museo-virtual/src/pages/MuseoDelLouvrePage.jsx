import React from 'react'
import Museo from '../components/Museo';
import LaMonaLisa from '../images/LaMonaLisa.jpg'
import LaLibertadGuiandoAlPueblo from '../images/LaLibertadGuiandoAlPueblo.jpg'
import LasBodasDeCana from '../images/LasBodasDeCana.jpg'

function MuseoDelLouvre(props) {
	const museo = {
		nombre: "Museo del Louvre",
		descripcion: "El Museo del Louvre, ubicado en París, es el museo de arte más visitado del mundo. Antiguo palacio real, abrió como museo en 1793 y alberga más de 35,000 obras de arte, incluyendo la icónica Mona Lisa de Leonardo da Vinci, La Libertad guiando al pueblo de Delacroix y la Venus de Milo. Su pirámide de cristal en la entrada es uno de los símbolos arquitectónicos más reconocidos."
	};

	const obras = [
		{
			obra: "La Mona Lisa",
			autor: "Leonardo da Vinci",
			imagen: LaMonaLisa
		},
		{
			obra: "La Libertad guiando al pueblo",
			autor: "Eugène Delacroix",
			imagen: LaLibertadGuiandoAlPueblo
		},
		{
			obra: "Las Bodas de Caná",
			autor: "Paolo Veronese",
			imagen: LasBodasDeCana
		}
	]
	return (
		<Museo usuario={props.usuario} museos={props.museos} museo={museo} obras={obras} />
	)
}

export default MuseoDelLouvre