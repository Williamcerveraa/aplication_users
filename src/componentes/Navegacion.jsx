import './ContenedorUsuarios.css';

function Navegacion(props) {
  return (
    <header className='cabecera'>
        <div className='contenedor_cabecera'>
            <img src="https://logicsystems.com.mx/wp-content/uploads/2021/05/cropped-logoLOGIC.png" alt="" className='logo_empresa' />
            <nav className='navegacion'>
                <a href="#">Usuarios</a>
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
            </nav>
        </div>
    </header>
    
   
  )
}

export {Navegacion}