import { useState } from 'react'
import './App.css';
import { AppRouter } from "./routing/AppRouter";
import { Context } from "./context/Context";

function App() {

  const [user, setUser] = useState({
    username: '',
    name: '',
    phone: ''
  });

  const [login, setLogin] = useState(false);

  return (
    <div className='container'>
      <Context.Provider value={{user, setUser, login, setLogin}}>
        <header className="App-header">
          <AppRouter/>
        </header>
      </Context.Provider>
    </div>
  )
}

export default App
