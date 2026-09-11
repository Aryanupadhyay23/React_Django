import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {  

  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind Test</h1>
      <Card username="Aryan" />
    </>
  )
}

export default App
