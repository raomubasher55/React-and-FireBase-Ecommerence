import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@material-tailwind/react'
import { Outlet } from 'react-router-dom'
import ScrollTop from './components/scrollTop/ScrollTop'
import { MyContextProvider } from './context/MyContext'

function App() {

  return (
    <>
      <MyContextProvider>
        <ScrollTop />
        <Outlet />
      </MyContextProvider>
      
    </>
  )
}

export default App
