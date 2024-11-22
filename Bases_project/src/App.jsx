
import React from 'react'
import './App.css'
export function Card ({title,descrip,format,img,notes})
{

  const image = `${img}`
  return (
    <div className="window">
        <h1>{title}</h1>
        <p className="description">
            <strong>Descripción:</strong><br/>
            {descrip}
        </p>
        <p className="format"><strong>Formato:</strong> {format}</p>
        
        <div className="content">
            <div className="image">
                <img src={image} alt="Diagrama de coordenadas"/>
            </div>
        </div>
        
        <p className="notes">
            <strong>Notas:</strong><br/>
            {notes}
        </p>
        
        <div className="buttons">
           
            <button>Cerrar</button>
        </div>
    </div>
  )
}

