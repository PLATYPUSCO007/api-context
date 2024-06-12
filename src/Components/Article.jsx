import React, { useEffect } from 'react'

export const Article = () => {

  useEffect(async ()=>{
    try {
      const petitionData =  fetch('')
    } catch (error) {
     console.error(`Error en la peticion: ${error}`); 
     throw new error(error);
    }
  },
  [])

  return (
    <div>Article</div>
  )
}
