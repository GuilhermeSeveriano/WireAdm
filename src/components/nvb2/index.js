import './style.css'
import logosenai from '../../assets/img/logosenai.png'

function NavLateral(){
    return(
       <div className="geral">
           <div className="logoSenai">
               <img src={logosenai} alt=""/>
           </div>
           <div className="areafuncao">
           <div className="funcao">
                   <div className="nomeFuncao">Dashboards</div>
               </div>
               <div className="funcao">
                   <div className="nomeFuncao">Gráficos</div>
               </div>
               <div className="funcao">
                   <div className="nomeFuncao">Tabelas</div>
               </div>
               <div className="funcao">
                   <div className="nomeFuncao">Maquinas</div>
               </div>
               <div className="funcao">
                   <div className="nomeFuncao">Gastos</div>
               </div>
               <div className="funcao">
                   <div className="nomeFuncao">Análises</div>
               </div>
           </div>
       </div>
    )
}

export default NavLateral;