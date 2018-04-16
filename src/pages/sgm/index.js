import React , {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Ionicon from 'react-ionicons'

/**
 * display:flex;
flex-direction:row;
flex-wrap: wrap;width: 100%;
 */

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  }


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
const CardPolitica  = styled.section`
background: #d7d7d7;
width: 100%;
height: 100%cc;
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
const Card = styled.section`
background: #FFFFFF;
width: 100%;
height: 100%cc;
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
'left': 0;
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

const Title = styled.h1`
font-size: 2.5em;
color: purple;
`;
const DnTitle = styled.h3`
margin: 0;
font-size: 1.2em;
font-weight: 300;
font-family: 'Open Sans',Helvetica,Arial,Sans-Serif;
margin-bottom:10px;
`
const SgmTitle = styled.h5`
display: inline-block;
margin-right: 20px !important;
margin: 0;
font-size: 1.2em;
font-weight: 300;
font-family: 'Open Sans',Helvetica,Arial,Sans-Serif;
margin-bottom:20px;
`
const SgmDescrip = styled.span`
color: rgba(0, 0, 0, 0.6);
font-family: "Roboto", sans-serif;
font-size: 12px;
line-height: 1.6em;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-transition: 0.5s ease;
transition: 0.5s ease;
`;

class Sgm extends Component{
    render(){
        return(
        <div style={styles}>
            <h1>Sistema Gestión Municipal</h1>

            <Wrapper>   
            <DnTitle>Estamos trabajando en la Nueva Documentación del Sistema de Gestión Municipal, cualquier duda o comentario puedo comunicarse con Mabel Nuñez al email menunez@providencia.cl</DnTitle>
                
                    <CardPolitica>
                        <Products><TitleCard>POLÍTICA MUNICIPAL</TitleCard><TextoCard></TextoCard></Products>
                        <ul>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/Casso_2017.pdf'  target="_blank">
                                    <Ionicon icon="ios-add-circle" fontSize="35px" color="red"/>
                                    <SgmTitle>Politica Municipal</SgmTitle>
                                    <SgmDescrip>Descargue la Política Pública vigente </SgmDescrip>
                                </a>
                            </li>
                        </ul>
                    </CardPolitica>
            
            
                    <Card>
                        <Products><TitleCard>FORMULARIOS</TitleCard><TextoCard>Descargue el formulario requerido haciendo click en el documento que necesita</TextoCard>
                        <ul>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-001.pdf'  target="_blank">
                                    <SgmTitle>F-ES-001</SgmTitle>
                                    <SgmDescrip>Lista de asistencia</SgmDescrip>
                                </a>
                            </li>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-002.pdf'  target="_blank">
                                    <SgmTitle>F-ES-002</SgmTitle>
                                    <SgmDescrip>Minuta de Reunión</SgmDescrip>
                                </a>
                            </li>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-003.pdf'  target="_blank">
                                    <SgmTitle>F-ES-003</SgmTitle>
                                    <SgmDescrip>Indicador de Efectividad</SgmDescrip>
                                </a>
                            </li>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-004.pdf'  target="_blank">
                                    <SgmTitle>F-ES-004</SgmTitle>
                                    <SgmDescrip>Normativa Aplicable</SgmDescrip>
                                </a>
                            </li>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-005.pdf'  target="_blank">
                                    <SgmTitle>F-ES-005</SgmTitle>
                                    <SgmDescrip>Informe de situación Actual</SgmDescrip>
                                </a>
                            </li>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-006.pdf'  target="_blank">
                                    <SgmTitle>F-ES-006</SgmTitle>
                                    <SgmDescrip>Formato de Encuesta</SgmDescrip>
                                </a>
                            </li>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-007.pdf'  target="_blank">
                                    <SgmTitle>F-ES-007</SgmTitle>
                                    <SgmDescrip>Resultados de Encuestas</SgmDescrip>
                                </a>
                            </li>
                            <li style={{ textAlign: 'left'}}>
                                <a href='http://intranet2.providencia.cl/sgm/F-ES-008.pdf'  target="_blank">
                                    <SgmTitle>F-ES-008</SgmTitle>
                                    <SgmDescrip>Ficha de Procesos y levantamiento de información</SgmDescrip>
                                </a>
                            </li>
                            
                        </ul>
                        </Products>
                    </Card>
            
            </Wrapper> 
             {
            // <ul>
            //     <li><a href="http://ppto.providencia.cl/" alt="">PLANIFICACIÓN PRESUPUESTARIA</a></li  target="_blank">
            //     <li><a href="http://cr.providencia.cl/centroderesultado/login.asp" alt="">CENTRO DE RESULTADOS</a></li  target="_blank">
            //     <li><a href="http://crm.providencia.cl/" alt="">OAVI</a></li  target="_blank">
            //     <li><a href="#" alt="">SGCASSO</a></li  target="_blank">
            //     <li><a href="http://100.1.18.202/datafolder2013" alt="">DATA FOLDER</a></li  target="_blank">
            //     <li><a href="http://intranet2.providencia.cl/reporte-de-incidente" alt="">REPORTE DE INCIDENTES CASSO</a></li  target="_blank">
            //     <li><a href="http://appl.smc.cl/bippto/muni/providencia.aspx" alt="">GESTIÓN DE PRESUPUESTO</a></li  target="_blank">
            // </ul> 
             }
        </div>          

        )}

}



export default Sgm



