import React from 'react'
import Busca from './Busca'

function App() {
  return (
    <div className='grid justify-content-center m-auto w-9 border-round border-400'>
        <div className='col-12'>
          <center><h1>Exibir uma lista de...</h1></center>
        </div>
        <div className='col-8'>
          <Busca />
        </div>
    </div>
  )
}

export default App