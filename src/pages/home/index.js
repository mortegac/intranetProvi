import React , {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Moment from 'react-moment'
import { Timeline } from 'react-twitter-widgets'
// import striptags from 'striptags'
//import sanitizeHtml from 'sanitize-html' 
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import {Link} from 'react-router-dom';
// import IcoWeather from '../../components/icoWeather/'

import Loading from 'react-loading-animation'


import Cumpleanos from '../../components/cumpleanos/'
import HomeNavbarLeft from '../../components/homeNavbarLeft/'
import HomeNavbarRigth from '../../components/homeNavbarRight/'
// import NewsList from '../../components/newsList/'
import NewsSlide from '../../components/newsSlide/'

// import SanitizedHTML from 'react-sanitized-html';


const Wrapper = styled.section`
display:flex;
flex-direction:row;
background: papayawhip;
justify_content:space-around;
border-top: 10px #e0eaef solid;
border-bottom: 10px #e0eaef solid;
`;

const Slide = styled.section`
padding: 10px;
height:302px;
width:949px;
border-radius: 6px;
border: solid 1px #C5C5C5;
padding: 20px;
padding-bottom: 16px;

@media screen and (max-width: 1120px) { display:none; }   
`

const Divleft = styled.section`
min-width: 224px;
padding: 8px;
border-radius: 6px;
border: solid 1px #C5C5C5;

@media (max-width: 890px){ display:none; }   
`
const Divrigth = styled.section`
min-width: 226px;
       
@media (max-width: 1135px){ display:none; }      
`

  
const Divcenter = styled.section`
width:100%;
min-height:540px;
margin:0 0 0 10px;
padding: 8px;
border-radius: 6px;
border: solid 1px #C5C5C5;@media (max-width: 740px) {
    width: 100%;
    margin:0;
    }
`


const Title = styled.h1`
font-size: 2.5em;
color: purple;
`;

//style={{textAlign: 'left', padding: '10px 0 0 20px', border:'1px solid'}}
//Details News List
const DnWrapper= styled.section`
text-align:left;
padding:10px 10px 10px 20px;
border-bottom: 1px solid
`

const DnDate = styled.div`
font-size: 11px;
line-height: 14px;
color: #999999;
`
const DnTitle = styled.h3`
margin: 0;
font-size: 1.7em;
font-weight: 300;
font-family: 'Open Sans',Helvetica,Arial,Sans-Serif;
`
const DnDescription = styled.div`
font-style: normal;
font-variant-ligatures: normal;
font-variant-caps: normal;
font-variant-numeric: normal;
font-weight: normal;
font-stretch: normal;
font-size: 12px;
line-height: 16px;
font-family: "Open Sans", Helvetica, Arial, sans-serif;
color: #888;
text-align:justify;
`

//  <iframe type="text/html" height="245" width="100%" frameborder="0" 
// src="http://forecast.io/embed/#lat=-33.46&amp;lon=-70.65&amp;name=Santiago&amp;lang=es&amp;units=auto"></iframe>
// <iframe src="https://www.google.com/maps/d/embed?mid=18ivZR2TDK4EChBskLOFmE62ob20" width="640" height="480"></iframe>
class Home extends Component{
    constructor(props){
        super(props)
        const { fetchNewsList } = this.props
        fetchNewsList()

        
        }


    
    render(){
        const {newsr, fetchNews} = this.props
        // const datos = newsr.data.map((x,i)=>{ return { id: x.id, date: x.date, titleShort: x.title.rendered.slice(0, 55), title: x.title.rendered, detail:x.content.rendered, detailClean:striptags(x.content.rendered.slice(0, 300))} })
        const datos = newsr.data.map((x,i)=>{ return { id: x.id, date: x.date, titleShort: x.title.rendered.slice(0, 55), title: x.title.rendered, detail:x.content.rendered, detailClean:x.content.rendered.slice(0, 300).replace(/<\/?[^>]+(>|$)/g, "")} })
   //     const imagesSlide = newsr.dataImages.map((x,i)=>{ return { id: x.id, idPost: x.idPost, url: x.url } })
        const imagesSlide = newsr.dataImages.map((z)=>{ return { idPost: z.idPost, slider: z.slider } })
        //const imagesSlide = newsr.dataImages.map((z)=>{ return z })
        //  console.log('newsr',newsr)
        console.log('imagesSlide',imagesSlide)
        return(
        <div>  

            <Slide>
                <NewsSlide data={imagesSlide}></NewsSlide>
            </Slide> 
            
            <Wrapper>
                <Divleft>
                {
                //<IcoWeather></IcoWeather>
                }
                    <Cumpleanos></Cumpleanos>
                    <HomeNavbarLeft></HomeNavbarLeft>
                    <Timeline
                        dataSource={{
                        sourceType: 'profile',
                        screenName: 'Muni_provi'
                        }}
                        options={{
                        username: 'Muni_provi',
                        height: '400'
                        }}
                        onLoad={() => console.log('Timeline is loaded!')}
                    />
                    

                </Divleft>
                
                <Divcenter>

                    <h1 style={{ margin:'0'}}>Noticias</h1>
                    {datos.length === 0 ?  <Loading/> :  null  }
                    {datos.map(x =>
                        <DnWrapper key={x.id}>
                            
                            <DnDate>
                                <Moment format="DD MMM YYYY">{x.date}</Moment>
                            </DnDate>
                            
                            <Link to={'/detail/' + x.id}  params={{ 'id': x.id }} className="nav-item " style={{ color: '#000'}}>
                            <DnTitle>{x.titleShort}
                                {x.title.length > 55 ? '...' : ''}
                            </DnTitle>
                            </Link>
                            
                            <DnDescription>{x.detailClean}
                                {x.detailClean.length > 70 ? '...' : ''}
                            </DnDescription>
                        </DnWrapper>
                    )}
               

                   { 
                       //<NewsList></NewsList>

                     }
                </Divcenter>

               { 
                //    <Divrigth> 
                //     <HomeNavbarRigth></HomeNavbarRigth> 
                // </Divrigth>
                //<div><pre style={{ textAlign: 'left'}}>{JSON.stringify(datos, null, 2) }</pre></div>   
            }

            </Wrapper>
            
            
        </div>          
        )}

}


const mapStateToProps = state => {
//Mapeo una parte de las prop
//Permite seleccionar solo lo que utilizare y no todo el state
//Por default se inyecta todo
  return { ...state, }
}

const mapDispatchToProps = dispatch => ({ 
//Mapeo el fetch y hace disponible la instancia es como replicamos la instancia del this
//Permite seleccionar las accciones que necesito despachar en la aplicacion
//Por default no inyecta nada   
    fetchNewsList: () => dispatch({ type: 'FETCH_NEWSLIST' }),
    
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)



