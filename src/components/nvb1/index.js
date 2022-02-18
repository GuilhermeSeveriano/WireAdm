import "./style.css";
import imgbrasilsuica from "../../assets/img/brasilsuica.png";

function NvbTelaPrincipal() {
  return (
    <nav className="cabecalho py-1 bg-dark d-flex">
      <div className="NavBares">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href className="nav-link" rel="noreferrer">
              Guia1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href>
              Guia2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href>
              Guia3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href>
              +
            </a>
          </li>
        </ul>
      </div>
      <div className="selosuibra">
        <img src={imgbrasilsuica} alt="selo suiço brasileira" />
        <a
          href="https://suicobrasileira.sp.senai.br/"
          rel="noreferrer"
          target="_blank"
        >
          /suiçobrasileira
        </a>
      </div>
    </nav>
  );
}

export default NvbTelaPrincipal;
