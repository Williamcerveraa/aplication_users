import React from 'react'
import './ContenedorUsuarios.css';
const ContenedorUsuarios = (props) => {
  return (
    <section className="seccion_usuarios">
        <h2 className='titulo_usuarios'>Nuestros Usuarios: </h2>
        {props.children}
        
      </section>
  )
}

export {ContenedorUsuarios}

