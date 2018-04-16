import React , {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import news from '../../components/newsList/reducer';

const Divcenter = styled.section`
width:100%;
min-height:540px;
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

class DetailPost extends Component{
    constructor(props){
        super(props)
        const {fetchNewsDetail} = this.props
        fetchNewsDetail(this.props.match.params.id)
        
        // const idPost = match.params.id
        // const dataDetail = newsr.data.filter((idPost, idPost222, arr) => arr.indexOf(idPost) === idPost);
        //const dataDetail = newsr.data.filter((x, idPost) => x.id === idPost );
        // const dataDetail = newsr.data.filter((x, idPost) => x.id > idPost );
        //const dataDetail = post.filter((x, idPost) =>  { return x.id == this.props.match.params.id } );
        //const postArray = dataDetail.map((x,i)=>{ return { id: x.id, date: x.date, titleShort: x.title.rendered.slice(0, 55), title: x.title.rendered, detail:x.content.rendered, detailClean:striptags(x.content.rendered.slice(0, 300))} })
        // console.log('idPost: ', idPost)
        // console.log('dataDetail', dataDetail)
        // console.log('this.props', this.props)
        //console.log('postArray', postArray)
        
        
        // <h1 style={{color:'green' }}>Detalle Post {this.props.match.params.id}</h1> 
//   <div><pre style={{ textAlign: 'left'}}>{JSON.stringify(post, null, 2) }</pre></div>      
        
/* 
    {newsr.map(x =>
        <div style={{ padding:'0 25px', textAlign:'left'}}>
            <h1>{x.title} </h1>
            <div dangerouslySetInnerHTML={{ __html: x.detail }}/>
        </div>
    )}
*/

        }
    render(){
        const {post} = this.props
        console.log('post', post)
        return(
        <div> 
              
            
            <Divcenter>
               
            {post.map(x => 
                <div key={x.id} style={{ padding:'0 25px', textAlign:'left'}}>
                <h1>{x.title.rendered} </h1>                
                <div dangerouslySetInnerHTML={{ __html: x.content.rendered.replace(/width=".*?"/, 'width="100%"').replace(/height=".*?"/, 'height="100%"')  }}/>
            </div>
            )}

            </Divcenter>    
        </div>          

        )}

}



const mapStateToProps = state => {
    console.log('STATE:  ',state)
  return {
    post: state.newsr.data
  }
}

const mapDispatchToProps = dispatch => ({
    fetchNewsDetail: (idPost) => dispatch({ type: 'FETCH_NEWDETAIL' , payload: { id: idPost } })
 
})
export default connect(mapStateToProps, mapDispatchToProps)(DetailPost)



