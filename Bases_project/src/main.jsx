import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./App"; // Asegúrate de que el componente Card esté correctamente importado

const content = ReactDOM.createRoot(document.getElementById("content"));

const App = () => {
  // Estado para las tarjetas, inicialmente cerradas
  const [cards, setCards] = useState([
      {
        id: 1,
        title: "G00 Posicionamiento rápido",
        descrip: "Los desplazamientos programados con G00 se ejecutan según una línea recta en avance rápido.",
        format: "G00 X+5.3 Y+5.3 Z+5.3",
        img: "/public/G00.webp",
        notes: "Al encendido, después de M02, M30, EMERGENCIA o RESET, el control asume el código G00. El código G00 es modal e incompatible con G01, G02, G03, G33. <br> Al programar la función G00, no se anula la última F programada, es decir, cuando se programa de nuevo G01, G02 o G03 se recupera dicha F.",
        isOpen: false,
      },
      {
        id: 2,
        title: "G01 Interpolación lineal",
        descrip: "Los desplazamientos programados después de G01 se ejecutan según una línea recta al avance F programado. Si no se programa el código F, el avance será 0.",
        format: "G01 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes: "El código G01 es modal e incompatible con G00, G02, G03, G33.",
        isOpen: false,
      },
      {
        id: 3,
        title: "G02 Interpolación circular a derechas",
        descrip: "Los movimientos programados a continuación de G02 se ejecutan en forma de trayectoria circular al avance de F programado. La interpolación circular solo se puede ejecutar en el plano.",
        format: "G02 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes: "El código G02 es modal e incompatible con G00, G01, G03, G33.",
        isOpen: false,
      },
      {
        id: 4,
        title: "G01 Interpolación lineal",
        descrip: "Los desplazamientos programados después de G01 se ejecutan según una línea recta al avance F programado. Si no se programa el código F, el avance será 0.",
        format: "G01 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes: "El código G01 es modal e incompatible con G00, G02, G03, G33.",
        isOpen: false,
      },
      {
        id: 5,
        title: "G01 Interpolación lineal",
        descrip: "Los desplazamientos programados después de G01 se ejecutan según una línea recta al avance F programado. Si no se programa el código F, el avance será 0.",
        format: "G01 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes: "El código G01 es modal e incompatible con G00, G02, G03, G33.",
        isOpen: false,
      },
      {
        id: 6,
        title: "G01 Interpolación lineal",
        descrip: "Los desplazamientos programados después de G01 se ejecutan según una línea recta al avance F programado. Si no se programa el código F, el avance será 0.",
        format: "G01 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes: "El código G01 es modal e incompatible con G00, G02, G03, G33.",
        isOpen: false,
      },
      {
        id: 7,
        title: "G01 Interpolación lineal",
        descrip: "Los desplazamientos programados después de G01 se ejecutan según una línea recta al avance F programado. Si no se programa el código F, el avance será 0.",
        format: "G01 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes: "El código G01 es modal e incompatible con G00, G02, G03, G33.",
        isOpen: false,
      },
      {
        id: 8,
        title: "G01 Interpolación lineal",
        descrip: "Los desplazamientos programados después de G01 se ejecutan según una línea recta al avance F programado. Si no se programa el código F, el avance será 0.",
        format: "G01 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes: "El código G01 es modal e incompatible con G00, G02, G03, G33.",
        isOpen: false,
      }
  ]);

  // Función para alternar el estado de la tarjeta
  const toggleCard = (id) => {
    setCards(cards.map(card => card.id === id ? { ...card, isOpen: !card.isOpen } : card));
  };

  return (
    <React.Fragment>
      {cards.map(card => (
        <div key={card.id}>
          <button onClick={() => toggleCard(card.id)}>
            {card.isOpen ? "Cerrar" : "Abrir"} {card.title}
          </button>
          {card.isOpen && (
            <Card
              title={card.title}
              descrip={card.descrip}
              format={card.format}
              img={card.img}
              notes={card.notes}
            />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

content.render(<App />);