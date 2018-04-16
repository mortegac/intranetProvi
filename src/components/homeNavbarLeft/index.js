import React, {Component} from 'react'
import styled from 'styled-components'

import menuFormAltasBajas from './images/bt-solicitudAltasBajas.png'
import menuAlmorzar from './images/btn-almorzar.png'
import menuRiesgos from './images/btn-previene-riesgos.png'

import menuIncidentes from './images/btn-reporte-incidentes.png'
import menuUv from './images/btn-uv.png'
import menuTiempo from './images/btn-tiempo.png'

       
//style={{ maxHeight: '95px'}}

const Wrapper = styled.section`
display:flex;
Flex-direction:column;
background: papayawhip;
justify_content:space-around;
`;

class HomeNavbarLeft extends Component {
  render () {
    return (
        <Wrapper>
          <div>
          <a href="https://sites.google.com/providencia.cl/portal-cuentas-usuarios"  target="_blank">
            <img src={menuFormAltasBajas} alt="Donde Almorzar" style={{ width: '226px'}}/>
          </a><div>
          <a href="http://turismo.providencia.cl/servicios/gastronomia"  target="_blank">
            <img src={menuAlmorzar} alt="Donde Almorzar" style={{ width: '226px'}}/>
          </a></div>
          <a href="https://weather.com/es-US/tiempo/10dias/l/-33.43,-70.62" target="_blank">
            <img src={menuTiempo} alt="El tiempo" style={{ width: '226px'}}/>
          </a></div>
          <div><a href="http://www.meteochile.gob.cl/" target="_blank">
            <img src={menuUv} alt="Indice Radiación Ultra Violeta" style={{ width: '226px'}}/>
          </a></div>


        </Wrapper>
    )
  }
}

export default HomeNavbarLeft;
