import React, {Component} from 'react'
import styled from 'styled-components'

import menuBienestar from './images/btn-bienestar.png'
import menuAsoc from './images/btn-gremiales2.png'
import menuConcurso from './images/btn-publicos-2.png'
import menuCasso from './images/btn-casso2.png'
import menuReporte from './images/btn-incidente2.png'
import menuTiempo from './images/btn-tiempo2.png'
import menuUv from './images/btn-uv2.png'

       
//style={{ maxHeight: '95px'}}

const Wrapper = styled.section`
display:flex;
Flex-direction:column;
background: papayawhip;
justify_content:space-around;
`;

class HomeNavbarRigth extends Component {
  render () {
    return (
        <Wrapper>
          <div><a href="http://intranet2.providencia.cl/component/banners/click/21">
            <img src={menuBienestar} alt="Bienestar" style={{ width: '226px'}}/>
          </a></div>
          <div><a href="http://intranet2.providencia.cl/component/banners/click/15">
            <img src={menuAsoc} alt="Asociaciones Gremiales" style={{ width: '226px'}}/>
          </a></div>
          <div><a href="http://intranet2.providencia.cl/component/banners/click/16">
            <img src={menuConcurso} alt="Concursos Públicos" style={{ width: '226px'}}/>
          </a></div>
          <div><a href="http://intranet2.providencia.cl/component/banners/click/20">
            <img src={menuCasso} alt="Sistema Casso" style={{ width: '226px'}}/>
          </a></div>
          <div><a href="http://intranet2.providencia.cl/component/banners/click/13">
            <img src={menuReporte} alt="Reporte de Incidencias" style={{ width: '226px'}}/>
          </a></div>
          <div><a href="http://intranet2.providencia.cl/component/banners/click/19">
            <img src={menuTiempo} alt="El tiempo" style={{ width: '226px'}}/>
          </a></div>
          <div><a href="http://intranet2.providencia.cl/component/banners/click/18">
            <img src={menuUv} alt="Radiación UV" style={{ width: '226px'}}/>
          </a></div>
        </Wrapper>
    )
  }
}


export default HomeNavbarRigth;

