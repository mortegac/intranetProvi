import React , {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import SearchInput, {createFilter} from 'react-search-input'


import directory from './directory4'
import './css/searchInput.css'

import '../../utils/style.css';
const KEYS_TO_FILTERS = ['name', 'lastname', 'unidad', 'depto', 'direccion']

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
width: 280px;
height: 390px;
margin-bottom:20px;
border-radius: 12px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
box-sizing: border-box;
padding: 15px;
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

const ImgCard = styled.div`
border-radius: 50%;
width: 150px;
height: 150px;
background: #fff;
border: 5px solid rgba(0,0,0,0.23);
margin: 5px auto;
background-repeat: no-repeat;
background-position: center 20% ; 

background-size: 'cover';
overflow: 'hidden';
background-size: 110%;    

`
const TitleCard = styled.h2`
margin: 0 0 12px;
color: #192f6c;
font-size: 16px;
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
display:bloque;
`;

  // initialState.data = initialState.data.filter(l => {
  //   return l.name.match( 'P' );
  // });
// <div><pre style={{ textAlign: 'left'}}>{JSON.stringify(initialState.data, null, 2) }</pre></div>

class Employee extends Component {
    constructor(props){
      super(props)
      this.state = {
        searchTerm: ''
      }
        this.Img=""
        this.searchUpdated = this.searchUpdated.bind(this)
      }

//<ImgCard style={{ backgroundImage: 'url(http://encuesta.providencia.cl/cgi/WS_Intranet.exe/GetFoto?RUT=6571813&Ancho=200&alto=150)'}}></ImgCard>
//http://intranet.providencia.cl/images/
//<ImgCard style={{ backgroundImage: `url(http://encuesta.providencia.cl/cgi/WS_Intranet.exe/GetFoto?RUT=${x.rut}&Ancho=160&alto=220)` }}></ImgCard>
    
    render () {
      const filtered = directory.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
      return (
        <div>
            <h1>Directorio Teléfonico</h1>
            
            
            <SearchInput placeholder="¿A quién busca?" className="search-input" onChange={this.searchUpdated} />
            <Wrapper> 
               
              {filtered.map(x => {
               
               // { x.img != '' ? this.Img=`./images/${x.img}` : this.Img=`http://encuesta.providencia.cl/cgi/WS_Intranet.exe/GetFoto?RUT=${x.rut}&Ancho=160&alto=220)`}

                return (

                  <Card key={x.id}>
                    <Products>
                        {
                    //    <ImgCard style={{ backgroundImage: `url(http://intranet.providencia.cl/images/${x.img})` }}></ImgCard>
                    // {`${x.unidad}`} - {`${x.depto}`} - 
                    }
                    { //x.unidad === x.depto ? x.unidad : <span>{x.unidad} <br/> {x.depto }</span>
                    //<ImgCard style={{ backgroundImage: `url(http://encuesta.providencia.cl/cgi/WS_Intranet.exe/GetFoto?RUT=${x.rut}&Ancho=160&alto=220)` }}></ImgCard>
                    }
                    
                    { x.img != '' ? 
                        <ImgCard style={{ backgroundImage: `url(${x.img})` }}></ImgCard>
                        : 
                        <ImgCard style={{ backgroundImage: `url(http://intranet2.providencia.cl/images/${x.rut}_160x220.jpg)` }}></ImgCard>
                        }


{
                        //<ImgCard style={{ backgroundImage: `url(${x.img})` }}></ImgCard>
                        }
                        <TitleCard>{`${x.name} ${x.lastname}`}</TitleCard>
                        <TextoCard>
                        { x.unidad === x.depto ? x.unidad : <span>{x.unidad} <br/> {x.depto }</span>}
                        
                        

                        <span style={{ color: '#192f6c'}}> {`${x.direccion}`}</span><br/></TextoCard>
                        <TextoCard><h3 style={{ color: 'rgb(230, 47, 71)', margin:'5px 0', borderBottom:'1px solid', borderTop:'1px solid', padding:'5px'}}>{`${x.phone}`}</h3></TextoCard>
                        <a href={`mailto:${x.email}`}><TextoCard style={{ color: 'rgb(2, 80, 73)'}}>{`${x.email}`}<br/></TextoCard></a>
                        
                        
                    </Products>
                  </Card>


                 
                )
              })}

              
                
          </Wrapper>
          
        </div>
      )
    }
    searchUpdated (term) {
      this.setState({searchTerm: term})
    }
    

    
  }


export default Employee
