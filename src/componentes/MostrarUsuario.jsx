import React, { useEffect, useState } from 'react';
import './Usuario.css';
import  imagenusuario from "../img/email.png";

const MostrarUsuario = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='contenedor_usuario'>
        {users.map(user => (
             <div className='contenedor_usuario_dos' key={user.id}>
                <h2 className='nombre_usuario'>{user.name}</h2>
                <img src='https://picsum.photos/180' alt='usuario' className='foto_usuario' />
                <div className='detalles_usuarios'>
                    <div className='contenedor_correo'>
                     <label htmlFor="email" className='label_usuario'>User Email</label>
                      <p className='correo_usuario'>{user.email}</p>
                    </div>
                      <div className='contenedor_ciudad'>
                        <label htmlFor="city">User City</label>
                        <p className='ciudad_usuario'>{user.address.city}</p>
                      </div>
                    <div className='contenedor_compania'>
                      <label htmlFor="company">User Company</label>
                      <p className='compania_usuario'>{user.company.name}</p>
                    </div> 
                </div>
            </div>
         
        ))}
    </div>      
   
  );
};

export {MostrarUsuario};
