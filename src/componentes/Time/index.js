import Colaborador from "../Colaboradores";
import "./time.css";

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corB }}>
      <h3 style={{ borderColor: props.corA }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corA}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
