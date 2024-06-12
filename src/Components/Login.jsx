import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

export const Login = () => {

  const {user, setUser, login, setLogin} = useContext(Context);

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    phone: ''
  })

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSend = ()=>{
    if (formData.name && formData.username && formData.phone) {
      setLogin(true);
      setUser(formData);
      setFormData({});
    }
  }

  return (
    <div className='d-flex flex-row flex-wrap w-100 justify-content-center'>
    {(!login) ? (
      <>
          <div className='d-flex flex-column justify-content-center align-items-center w-100 '>
            <h2>Loguin</h2>
          </div>
          <div className='d-flex flex-column align-items-center w-100 mt-3'>
            <form>
              <div className='d-flex flex-row flex-nowrap mt-3 w-70'>
                <input type="text" className='form-control w-100' name='username' placeholder='Username' onChange={handleChange}/>
              </div>
              <div className='d-flex flex-row flex-nowrap mt-3 w-70'>
                <input type="text" className='form-control w-100' name='name' placeholder='Name' onChange={handleChange}/>
              </div>
              <div className='d-flex flex-row flex-nowrap mt-3 w-70'>
                <input type="text" className='form-control w-100' name='phone' placeholder='Telefono' onChange={handleChange}/>
              </div>
              <div className='d-flex flex-row flex-nowrap justify-content-center mt-3 w-100'>
                <button type='button' className='btn btn-info w-100' onClick={handleSend}>Iniciar Sesion</button>
              </div>
            </form>
          </div>
          <pre>{JSON.stringify(formData)}</pre>
          <pre>{JSON.stringify(user)}</pre>
          </>
    ) : (
      <h3>Bienvenido {user.name}</h3>
    )
  }
    </div>
  )
}
