import React from 'react'

export const Navbar = () => {
        const titulos = ['Home','Contactp','Shp','Acerca de']
        const titulosMapeados = titulos.map((titulo, indice)=>{
            return(
                <h4 key={indice}>{titulo}</h4>
                )
        } )
    return (
    <div>
        {titulosMapeados}
    </div>
  )
}
