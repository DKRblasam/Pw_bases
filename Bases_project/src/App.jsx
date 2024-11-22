
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
        <div class="parameters">
                <h2>Parámetros:</h2>
                <label for="cotaX">Cota X</label>
                <label for="cotaY">Cota Y</label>
                <label for="cotaZ">Cota Z</label>
            </div>
            <div className="image">
                <img src={image} alt="Diagrama de coordenadas"/>
            </div>
        </div>
        
        <p className="notes">
            <strong>Notas:</strong><br/>
            {notes}
        </p>
    
    </div>
  )
}

