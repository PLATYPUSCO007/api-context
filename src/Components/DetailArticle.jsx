import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetailArticle = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(()=>{
    const petitionFetch = async ()=>{
      try {
        const petitionData = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data =  await petitionData.json();
        setProduct(data);
      } catch (error) {
        console.error(`Error en la peticion: ${error}`); 
        throw new error(error);
      }
    }
    petitionFetch();
  }, [id])

  return (
    <div className='d-flex flex-wrap w-100'>
      <div className='d-flex justify-content-center align-items-center w-100'>
        <h2>Detalle de articulo ID: {id}</h2>
      </div>
      {(!product) ? null : (
        <div className='d-flex justify-content-start w-100'>
          <div className='d-flex w-50'>
            <img src={product.images[1]} alt="imagen" width='100%' height='auto'/>
          </div>
          <div className='d-flex ms-3 w-50'>
            <h4>Titulo: {product.title}</h4>
          </div>
        </div>
      )}
    </div>
  )
}
