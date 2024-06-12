import React from 'react'
import { useContext } from "react";
import { Context } from '../context/Context';

export const Contact = () => {

  const {user} = useContext(Context)

  return (
    <div>
      <h3>Informacion de contacto</h3>
      <ul>
        <li>Nombre: {user.name}</li>
        <li>Telefono: {user.phone}</li>
        <li>Alias: {user.username}</li>
      </ul>
    </div>
  )
}
