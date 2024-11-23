import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./App"; // Asegúrate de que el componente Card esté correctamente importado

const content = ReactDOM.createRoot(document.getElementById("content"));

const app1 = () => {
  const [cards1, setCards1] = useState(
    [
        {
          id: 1,
          title: "M00 Parada del programa",
          descrip:
            "Detiene la ejecución del programa de manera intencionada. Requiere que el operador reinicie manualmente la máquina.",
          format: "M00",
          img: "/public/G00.webp",
          notes:
            "Se utiliza para pausas planificadas, como inspección de la pieza o cambio de herramienta manual.",
          isOpen: false,
        },
        {
          id: 2,
          title: "M01 Parada opcional",
          descrip:
            "Detiene la ejecución del programa si la parada opcional está activada en la máquina. Similar a M00, pero condicional.",
          format: "M01",
          img: "/public/G00.webp",
          notes:
            "El operador puede decidir activar o desactivar esta función en el control de la máquina.",
          isOpen: false,
        },
        {
          id: 3,
          title: "M02 Fin del programa",
          descrip:
            "Finaliza la ejecución del programa, pero no restablece la máquina al estado inicial.",
          format: "M02",
          img: "/public/G00.webp",
          notes:
            "Se utiliza principalmente en programas cortos o en subrutinas donde no es necesario un reinicio completo.",
          isOpen: false,
        },
        {
          id: 4,
          title: "M03 Husillo en giro horario",
          descrip:
            "Activa el giro del husillo en sentido horario a la velocidad programada.",
          format: "M03",
          img: "/public/G00.webp",
          notes:
            "Debe usarse junto con la programación de la velocidad del husillo (S).",
          isOpen: false,
        },
        {
          id: 5,
          title: "M04 Husillo en giro antihorario",
          descrip:
            "Activa el giro del husillo en sentido antihorario a la velocidad programada.",
          format: "M04",
          img: "/public/G00.webp",
          notes:
            "También debe usarse con la programación de velocidad (S). Incompatible con M03.",
          isOpen: false,
        },
        {
          id: 6,
          title: "M05 Detención del husillo",
          descrip:
            "Detiene el giro del husillo por completo.",
          format: "M05",
          img: "/public/G00.webp",
          notes:
            "Debe programarse antes de cambios de herramienta o ajustes manuales.",
          isOpen: false,
        },
        {
          id: 7,
          title: "M06 Cambio de herramienta",
          descrip:
            "Ejecuta el cambio automático de herramienta en la máquina.",
          format: "M06 T(tool_number)",
          img: "/public/G00.webp",
          notes:
            "Debe especificarse el número de herramienta (por ejemplo, T01, T02).",
          isOpen: false,
        },
        {
          id: 8,
          title: "M08 Activar refrigerante",
          descrip:
            "Enciende el sistema de refrigeración para enfriar la herramienta y la pieza.",
          format: "M08",
          img: "/public/G00.webp",
          notes:
            "Ayuda a reducir el calor generado durante el mecanizado y mejora el acabado de la pieza.",
          isOpen: false,
        },
        {
          id: 9,
          title: "M09 Desactivar refrigerante",
          descrip:
            "Apaga el sistema de refrigeración.",
          format: "M09",
          img: "/public/G00.webp",
          notes:
            "Debe programarse al final del mecanizado o antes de las pausas.",
          isOpen: false,
        },
        {
          id: 10,
          title: "M30 Fin del programa y reinicio",
          descrip:
            "Finaliza el programa y reinicia la máquina para dejarla lista para el siguiente ciclo.",
          format: "M30",
          img: "/public/G00.webp",
          notes:
            "Se utiliza al final de programas principales, dejando la máquina en su estado inicial.",
          isOpen: false,
        },
      
    ]  
    );
    // Función para alternar el estado de la tarjeta
  const toggleCard = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );
  };

  return (
    <React.Fragment>
      {cards.map((card) => (
        <div key={card.id}>
          <button onClick={() => toggleCard(card.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>
            <div className="text">
              {card.isOpen ? "Cerrar" : "Abrir"} {card.title}
            </div>
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

const App = () => {
  // Estado para las tarjetas, inicialmente cerradas
  
  const [cards, setCards] = useState([
      {
        id: 1,
        title: "G00 Posicionamiento rápido",
        descrip:
          "Los desplazamientos programados con G00 se ejecutan según una línea recta en avance rápido.",
        format: "G00 X+5.3 Y+5.3 Z+5.3",
        img: "/public/G00.webp",
        notes:
          "Al encendido, después de M02, M30, EMERGENCIA o RESET, el control asume el código G00. El código G00 es modal e incompatible con G01, G02, G03, G33. <br> Al programar la función G00, no se anula la última F programada, es decir, cuando se programa de nuevo G01, G02 o G03 se recupera dicha F.",
        isOpen: false,
      },
      {
        id: 2,
        title: "G01 Interpolación lineal",
        descrip:
          "Los desplazamientos programados después de G01 se ejecutan según una línea recta al avance F programado. Si no se programa el código F, el avance será 0.",
        format: "G01 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes:
          "El código G01 es modal e incompatible con G00, G02, G03, G33.",
        isOpen: false,
      },
      {
        id: 3,
        title: "G02 Interpolación circular a derechas",
        descrip:
          "Los movimientos programados a continuación de G02 se ejecutan en forma de trayectoria circular al avance de F programado. La interpolación circular solo se puede ejecutar en el plano.",
        format: "G02 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes:
          "El código G02 es modal e incompatible con G00, G01, G03, G33.",
        isOpen: false,
      },
      {
        id: 4,
        title: "G03 Interpolación circular a izquierdas",
        descrip:
          "Los movimientos programados a continuación de G03 se ejecutan en forma de trayectoria circular antihoraria al avance de F programado.",
        format: "G03 X+/-5.3 Y+/-5.3 Z+/-5.3",
        img: "/public/G00.webp",
        notes:
          "El código G03 es modal e incompatible con G00, G01, G02, G33.",
        isOpen: false,
      },
      {
        id: 5,
        title: "G17 Selección de plano XY",
        descrip:
          "Selecciona el plano de trabajo XY para la ejecución de movimientos circulares o interpolaciones.",
        format: "G17",
        img: "/public/G00.webp",
        notes:
          "Debe definirse antes de cualquier interpolación circular. Es modal y no se cancela hasta seleccionar otro plano (G18 o G19).",
        isOpen: false,
      },
      {
        id: 6,
        title: "G18 Selección de plano XZ",
        descrip:
          "Selecciona el plano de trabajo XZ para la ejecución de movimientos circulares o interpolaciones.",
        format: "G18",
        img: "/public/G00.webp",
        notes:
          "Es modal y no se cancela hasta seleccionar otro plano (G17 o G19).",
        isOpen: false,
      },
      {
        id: 7,
        title: "G19 Selección de plano YZ",
        descrip:
          "Selecciona el plano de trabajo YZ para la ejecución de movimientos circulares o interpolaciones.",
        format: "G19",
        img: "/public/G00.webp",
        notes:
          "Es modal y no se cancela hasta seleccionar otro plano (G17 o G18).",
        isOpen: false,
      },    
  ]);

  // Función para alternar el estado de la tarjeta
  const toggleCard = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card
      )
    );
  };

  return (
    <React.Fragment>
      {cards.map((card) => (
        <div key={card.id}>
          <button onClick={() => toggleCard(card.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>
            <div className="text">
              {card.isOpen ? "Cerrar" : "Abrir"} {card.title}
            </div>
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
