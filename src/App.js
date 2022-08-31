import Banner from "./componentes/Banner";
import Formulário from "./componentes/Formulário";
import { useState } from "react";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Time A",
      corA: "#57c278",
      corB: "#d9f7e9",
    },
    {
      nome: "Time B",
      corA: "#82CFFA",
      corB: "#e8f8ff",
    },
    {
      nome: "Time C",
      corA: "#A6D157",
      corB: "#f0f8e2",
    },
    {
      nome: "Time D",
      corA: "#EQ1869",
      corB: "#fde7e8",
    },
    {
      nome: "Time E",
      corA: "#DB6EBF",
      corB: "#fae9f5",
    },
    {
      nome: "Time F",
      corA: "#FFBA05",
      corB: "fff5d9",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulário
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corA={time.corA}
          corB={time.corB}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
