import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/common/Footer'
import Inicio from "./components/views/Inicio";
import Menu from "./components/common/Menu";
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/recetas/CrearReceta";


function App() {
  

  return (
<BrowserRouter>
<Menu></Menu>
<Routes>
<Route exact path="/" element={<Inicio></Inicio>}></Route>
<Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
<Route exact path="/administrador/crear-receta" element={<CrearReceta></CrearReceta>}></Route>
</Routes>
<Footer></Footer>
</BrowserRouter>
  )
}

export default App
