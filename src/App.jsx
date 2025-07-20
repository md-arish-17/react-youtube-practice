import React from 'react'
import Card from './components/Card'

const App = () => {

  const data = [
    {image:""}
  ]

  return (
    <div className='bg-zinc-400 text-white  h-[100vh] w-[100vw] flex items-center justify-center'>
      <Card/>
    </div>
  )
}

export default App