import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MuseoDelPradoPage from './pages/MuseoDelPradoPage';
import MuseoDelLouvrePage from './pages/MuseoDelLouvrePage';
import MuseoMetropolitanoPage from './pages/MuseoMetropolitanoPage';
import GaleriaDeImagenesPage from './pages/GaleriaDeImagenesPage';

function App() {
  const museos = ["Museo del Prado", "Museo del Louvre", "Museo Metropolitano de Arte"];
  const [datosUsuario, setDatosUsuario] = useState({usuario: "", password: ""});

  const handleLogin = (datos) => {
    setDatosUsuario(datos);
  }

  return (
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path='/' element={<MainPage usuario={datosUsuario} museos={museos} />} />
        <Route path='/1' element={<MuseoDelPradoPage usuario={datosUsuario} museos={museos} />} />
        <Route path='/2' element={<MuseoDelLouvrePage usuario={datosUsuario} museos={museos} />} />
        <Route path='/3' element={<MuseoMetropolitanoPage usuario={datosUsuario} museos={museos} />} />
        <Route path='/galeria' element={<GaleriaDeImagenesPage usuario={datosUsuario} museos={museos} />} />
      </Routes>
  )
}

export default App
