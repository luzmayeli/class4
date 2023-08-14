import React, { useState } from 'react'

export const Mesa5 = () => {

    const [lista,setLista] = useState([])
    const agregar = (item) =>{
        setLista([...lista, item])
    }

    
  return (
    <div>
        <button onClick={() => agregar('😀')}>😀</button>
        <button onClick={() => agregar('😂')}>😂</button>
        <button onClick={() => agregar('🥰')}>🥰</button>
        {lista.map(item => <li>se ha agregado {item} a la lista</li>)}
    </div>
  )
}
