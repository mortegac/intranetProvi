import React, {Component} from 'react';
// import Ionicon from 'react-ionicons'
// import {Menu} from 'react-router-dom';
import styled from 'styled-components'

import logoWhite from './images/providencia_white.png'

const Wrapper = styled.section`
display:flex;
flex-direction:row;
min-height: 200px;
background-color: #3b3c3e;
padding: 0 20px 0 20px;

@media (max-width: 650px) { flex-direction:column; }
`;


const Divleft = styled.section`
width:33%;
min-width:295px;
text-align:left;
`
const DivRight = styled.section`
width:33%;
min-width:295px;
text-align:left;
`
// const Divrigth = styled.section`
// width:33%;
// border:1px solid blue;
// @media (max-width: 1020px) { display: none; }
// `
// <Divrigth>Rigth</Divrigth>
//border:1px solid blue;

const Divcenter = styled.section`
width:33%;
@media (max-width: 1020px) { width:100%; }
`

// const ImgLogo = styled.image`

// `
const SpamDirecion=styled.section`
color: #ffffff;
font-size: 0.9em;
line-height: 1.7em;
`
// const MenuLi = styled.ul.attrs`
// text-align:left;
// `
const Menu = styled.a`
color:#fff;
text-align:left;
`



class Footer extends Component {
  render () {
    return (
        <Wrapper>
        <Divleft>
            <img alt="Municipalidad de Providencia" src={logoWhite} style={{ maxHeight: '75px', maxWidth: '201px'}}/>
            <SpamDirecion>Av. Pedro de Valdivia 963, Providencia - Chile</SpamDirecion>
            <SpamDirecion>Comunicaciones Internas Telef. +562 2654 3704</SpamDirecion>
            <SpamDirecion>Mesa de Ayuda: Anexos  3440 - 3441</SpamDirecion>
        </Divleft>
        <Divcenter>
       
                <ul style={{ textAlign: 'left', color: '#fff'}}>                  
                
                    <li><Menu  href="http://turismo.providencia.cl/servicios/gastronomia" target="_blank" alt="">Dónde Almorzar?</Menu></li>
                    <li><Menu  href="http://www.uoct.cl/restriccion-vehicular/" target="_blank" alt="">Restriccion Vehicular</Menu></li>
                    <li><Menu  href="https://weather.com/es-US/tiempo/10dias/l/-33.43,-70.62" target="_blank" alt="">El Tiempo</Menu></li>
                    <li><Menu  href="http://www.meteochile.gob.cl/" target="_blank" alt="">Radiación UV</Menu></li>
                </ul>
        
        </Divcenter>
        <DivRight>
        
        </DivRight>
        
    </Wrapper>
    )
  }
}

export default Footer;
