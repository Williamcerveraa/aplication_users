import './Usuario.css';

const Usuario = (props) => {
  return (
    <div className='contenedor_usuario'>
        <img src='https://picsum.photos/180' alt='usuario' className='foto_usuario' />
        <h2 className='nombre_usuario'>{props.name}</h2>
        <div className='detalles_usuarios'>
            <p className='correo_usuario'>{props.email}</p>
            <p className='ciudad_usuario'>{props.city}</p>
            <p className='compania_usuario'>{props.company}</p>
        </div>
    </div>
  )
}

export {Usuario}