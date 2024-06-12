import React, { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

export const Article = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      try {
        const petitionData = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=50');
        const data =  await petitionData.json();
        setProducts(data.slice(0, 40));
      } catch (error) {
        console.error(`Error en la peticion: ${error}`); 
        throw new error(error);
      }
    }
    fetchData();
  },
  [])

  return (
    <div className='d-flex flex-row flex-wrap justify-content-center align-items-center'>
      <div className='d-flex justify-content-center w-100'>
        <h3>LISTA DE PRODUCTOS</h3>
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-evenly w-100'>
      {
        (products.length > 0) ? (
          <>
          {console.log(products)}
            {products.map(product=>{
              return (
                <div className='d-flex card w-50 m-1' key={product.id}>
                  <div className='card-header d-flex flex-column justify-content-center align-items-center'>
                    <h4 className='card-title text-info'>{product.title}</h4>
                    <img src={product.images[0]} alt="" className='card-image' width="100%" height="300px"/>
                  </div>
                  <div className='card-body'>
                    <h5>Descripción:</h5>
                    <p>{product.description}</p>
                    <h5>Precio: <span className='text-danger'>${product.price}</span> </h5>
                  </div>
                  <div className='card-footer'>
                    <h6>Categoria: <span>{(product.category.name) ? product.category.name : ('NA')}</span></h6>
                    <div className='d-flex justify-content-evenly w-100 mt-3'>
                      <a href={`/detail/${product.id}`}><button className='btn btn-secondary'> Ver mas <span className='bi bi-plus-circle-dotted'></span></button></a>
                      <button className='btn btn-primary'>Comprar <span className='bi bi-fire'></span></button>
                    </div>
                    <div className='d-flex justify-content-end me-3'>
                      <span>{product.id}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        ) : null
      }
      </div>
    </div>
  )
}
