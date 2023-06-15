import React from 'react'
import './ContenedorUsuarios.css';
const ContenedorUsuarios = (props) => {
  return (
    <section className="seccion_usuarios">
        <h2 className='titulo_usuarios'>Nuestros Usuarios</h2>
        <hr className='linea_titulo_usuarios'/>
        {props.children}
        
      </section>
  )
}

export {ContenedorUsuarios}

