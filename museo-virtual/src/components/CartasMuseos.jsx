import React from "react";
import "./CartasMuseos.css";
import iconoMuseo from '../images/iconoMuseo.png';
import { useNavigate } from "react-router-dom"; 
function CartasMuseos(props) {
	const navigate = useNavigate(); 

	const handleClick = (index) => {
		navigate(`/${index + 1}`); 
	};

	return (
		<div className="containerCards">
			{props.museos.map((museo, index) => {
				return (
					<div className="museumCard" key={index} onClick={() => handleClick(index)}>
						<img src={iconoMuseo} alt={museo} />
						<p>{museo}</p>
					</div>
				);
			})}
		</div>
	);
}

export default CartasMuseos;

