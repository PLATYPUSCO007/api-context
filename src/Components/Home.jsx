import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {
  const contextValue = useContext(Context)
  return (
    <div>
      Home
      <pre>{contextValue.name}</pre>
    </div>
  )
}
