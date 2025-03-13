import React, { useState } from 'react'
import './LogIn.css'
import { useNavigate } from 'react-router-dom';

function LogIn(props) {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        usuario : "",
        password : ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(usuario);
        navigate("/");
    };

    const handleUsuarioInput = (e) => {
        setUsuario({...usuario, usuario : e.target.value})
    }

    const handlePasswordInput = (e) => {
        setUsuario({...usuario, password : e.target.value})
    }


    return (
        <div className="containerLogin">
            <div className="card">
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="usuario" placeholder="Usuario" onChange={handleUsuarioInput} />
                <input type="password" id="password" placeholder="Contraseña" onChange={handlePasswordInput} />
                <button>Iniciar sesión</button>
            </form>
        </div>
        </div>
    )
}

export default LogIn