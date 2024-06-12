import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { rutas } from "../Components";
import { Context } from '../context/Context';

export const AppRouter = () => {
  const {user, login, setLogin, setUser} = useContext(Context);

  const handleLogout = ()=>{
    setLogin(false);
    setUser({
      username: '',
      name: '',
      phone: ''
    });
  }

  return (
    <Router>
      <header className='header-nav'>
        <nav>
          <div className='logo'>
            <img src="/LOGOSTORE.png" alt="logo" width="90px" height="90px"/>
          </div>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/articulos'>Articulos</NavLink>
            </li>
            <li>
              <NavLink to='/contacto'>Contacto</NavLink>
            </li>
            <li>
              <NavLink to='/sobre_mi'>Sobre Mi</NavLink>
            </li>
            <li>
              {(login) ? (
                <NavLink to='/login'>{user.username}</NavLink>
              ) : (
                <NavLink to='/login'>Iniciar Sesión</NavLink>
              ) }
            </li>
            <li>
              {(login) ? (
                <NavLink to='/login' onClick={handleLogout}>Cerrar Sesión</NavLink>
              ): (
                null
              )}
            </li>
          </ul>
        </nav>
      </header>

      <section className='content'>
        <Routes>
            <Route path='/' element={<rutas.Home/>}></Route>
            <Route path='/login' element={<rutas.Login/>}></Route>
            <Route path='/articulos' element={<rutas.Article/>}></Route>
            <Route path='/detail/:id' element={<rutas.DetailArticle/>}></Route>
            <Route path='/contacto' element={<rutas.Contact/>}></Route>
            <Route path='/sobre_mi' element={<rutas.About/>}></Route>
            <Route path='/*' element={<rutas.ErrorPage/>}></Route>
        </Routes>
      </section>
    </Router>
  )
}
