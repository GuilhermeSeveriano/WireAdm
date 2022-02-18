import NvbTelaPrincipal from "../nvb1";
import dash from "../../assets/img/dashboard.png";
import grafic from "../../assets/img/grafico.png";
import formulario from "../../assets/img/form.png";
import element from "../../assets/img/elemento.png";
import calendar from "../../assets/img/calendario.png";
import erro from "../../assets/img/erro-404.png";
import add from "../../assets/img/adicionar.png";
import config from "../../assets/img/definicoes.png";

import "./style.css";

function Telaprincipal() {
  return (
    <div className="telagem">
      <NvbTelaPrincipal />

      <div className="secao1">
        <h3 className="nome-artigo">Histórico</h3>
        <div className="home-bibiloteca">
          <p className="nom">Home</p>
          <p className="nom">Bibiloteca</p>
        </div>
      </div>

      <div className="blocos">
        <div className="bloco">
          <img src={grafic} alt="" />
          <p>Graficos</p>
        </div>
        <div className="bloco">
          <img src={formulario} alt="" />
          <p>Formularios</p>
        </div>
      </div>
    </div>


    

  );
}

export default Telaprincipal;
