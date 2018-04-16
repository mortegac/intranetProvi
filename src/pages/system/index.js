import React , {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

/**
 * display:flex;
flex-direction:row;
flex-wrap: wrap;width: 100%;
 */
const Wrapper = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;


padding: 0 20px 0 20px;

@media (max-width: 440px) { flex-direction:column; }

`;

/**min-height: 200px;
border: 1px solid green;
background-color: #3b3c3e; */

const Card = styled.section`
background: #FFFFFF;
width: 260px;
height: 160px;
margin-bottom:20px;
border-radius: 12px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
box-sizing: border-box;
padding: 30px;
text-align: center;
transition: all 0.3s ease-out;
text-decoration: none;

@media (max-width: 440px) { width: 100%; }
&:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0,0,0,0.11),0 24px 46px var(--box-shadow-color);
    background-color:rgba(238, 191, 11, 0.8);
    color:#2c2d2d;

  }
&:overlay {
    border-color: rgb(238, 191, 11);
    background: rgb(247, 216, 98);

  }  
`;
const Products  = styled.section`
position: relative;
overflow: hidden;
-webkit-transition: 0.5s ease;
transition: 0.5s ease;
`;
const Product = styled.section`
position: absolute;
top: 0;
left: 0;
opacity: 1;
visibility: visible;
-webkit-transition: 0.5s ease;
transition: 0.5s ease;
`;

const TitleCard = styled.h2`
margin: 0 0 12px;
color: #192f6c;
font-size: 20px;
-webkit-transition: 0.5s ease;
transition: 0.5s ease;
`;

const TextoCard = styled.span`
color: rgba(0, 0, 0, 0.6);
font-family: "Roboto", sans-serif;
font-size: 12px;
line-height: 1.6em;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-transition: 0.5s ease;
transition: 0.5s ease;
`;
class System extends Component{

    render(){
        return(
        <div> 
            <h1>Acceso a Sistemas</h1>
            <Wrapper>   
                <a href="http://ppto.providencia.cl/"  target="_blank" alt="">
                    <Card>
                        <Products><TitleCard>PLANIFICACIÓN PRESUPUESTARIA</TitleCard><TextoCard>Aplicación que permite informar el presupesto estimado para el próximo período</TextoCard></Products>
                    </Card>
                </a>
                <a href="http://cr.providencia.cl/centroderesultado/login.asp"  target="_blank" alt="">
                    <Card>
                        <Products><TitleCard>CENTRO DE RESULTADOS</TitleCard><TextoCard>Acceda a la estadistica e informes del sistema de centros de resultados</TextoCard></Products>
                    </Card>
                </a>
                <a href="http://crm.providencia.cl/"  target="_blank" alt="">
                    <Card>
                        <Products><TitleCard>OIRS(Ex-OAVI)</TitleCard><TextoCard>Aplicación de la oficina de OIRS donde se recepcionan reclamos, felicitaciones y consultas</TextoCard></Products>
                    </Card>
                </a>
                <Link to='/sgm' className="nav-item " style={{ color: '#000'}}>
                    <Card>
                        <Products><TitleCard>SISTEMA DE GESTION (SGM)</TitleCard></Products>
                    </Card>
                    </Link>
                <a href="http://101.1.1.17/datafolder2013/"  target="_blank" alt="">
                    <Card>
                        <Products><TitleCard>DATA FOLDER</TitleCard><TextoCard>Sistema de personal orientado a las jefaturas</TextoCard></Products>
                    </Card>
                </a>
                <a href="http://192.1.50.30/RptIncidentes/"  target="_blank" alt="">
                    <Card>
                        <Products><TitleCard>REPORTE DE INCIDENTES CASSO</TitleCard><TextoCard>Permite informar incidentes </TextoCard></Products>
                    </Card>
                </a>
                <a href="http://appl.smc.cl/bippto/muni/providencia.aspx"  target="_blank" alt="">
                    <Card>
                        <Products><TitleCard>GESTIÓN DE PRESUPUESTO</TitleCard><TextoCard>Sistema de centro de resultados </TextoCard></Products>
                    </Card>
                </a>
                <a href="https://sites.google.com/providencia.cl/portal-cuentas-usuarios"  target="_blank" alt="">
                    <Card>
                        <Products><TitleCard>SOLICITUD DE ALTAS Y BAJAS</TitleCard><TextoCard>Formulario en donde se puede solicitar la alta o baja de un Funcionario </TextoCard></Products>
                    </Card>
                </a>
            </Wrapper> 
             {
            // <ul>
            //     <li><a href="http://ppto.providencia.cl/" alt="">PLANIFICACIÓN PRESUPUESTARIA</a></li>
            //     <li><a href="http://cr.providencia.cl/centroderesultado/login.asp" alt="">CENTRO DE RESULTADOS</a></li>
            //     <li><a href="http://crm.providencia.cl/" alt="">OAVI</a></li>
            //     <li><a href="#" alt="">SGCASSO</a></li>
            //     <li><a href="http://100.1.18.202/datafolder2013" alt="">DATA FOLDER</a></li>
            //     <li><a href="http://intranet2.providencia.cl/reporte-de-incidente" alt="">REPORTE DE INCIDENTES CASSO</a></li>
            //     <li><a href="http://appl.smc.cl/bippto/muni/providencia.aspx" alt="">GESTIÓN DE PRESUPUESTO</a></li>
            // </ul> 
             }
        </div>          

        )}

}



const mapStateToProps = state => {
    // console.log(state)
  return {
    ...state,
  }
}

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(System)



