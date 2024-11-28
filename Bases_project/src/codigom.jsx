import React from 'react';
import ReactDOM from 'react-dom/client';

import { Card } from './App';

const content = ReactDOM.createRoot(document.getElementById('content'));

content.render(
  <React.Fragment>
  <Card title={'G00 Posicionamiento rápido'} 
  descrip={'Los desplazamientos programados con G00 se ejecutan según una línea recta en avance rápido.'} 
  format={'G00 X+5.3 Y+5.3 Z+5.3'} img={'/public/G00.webp'} 
  notes={'Al encendido, después de M02, M30, EMERGENCIA o RESET, el control asume el código G00. El código G00 es modal e incompatible con G01, G02, G03, G33. <br> Al programar la función G00, no se anula la última F programada, es decir, cuando se programa de nuevo G01, G02 o G03 se recupera dicha F.'}/>

  <Card title={'G01 Interpolacion Lineal'} 
  descrip={'Los desplazamientos programados despues de G01  se Ejecutan segun una linea recta al avance F programado. Si no se programa el codigo F, el avance sera 0.'} 
  format={'G01 X+/-5.3 Y+/-5.3 Z+/-5.3'} img={'/public/G00.webp'} 
  notes={'El codigo G01 es modal e incompatible con G00,G02,G03,G33.'}/>
</React.Fragment>
);