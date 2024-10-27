import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@material-tailwind/react'
  import { Outlet } from 'react-router-dom'
import ScrollTop from './components/scrollTop/ScrollTop'
import { MyContextProvider } from './context/MyContext'
import PageTracker from './components/analytics/PageTracker'

function App() {

  return (
    <>
    <PageTracker/>
      <MyContextProvider>
        <ScrollTop />
        <Outlet />
      </MyContextProvider>
      
    </>
  )
}

export default App
