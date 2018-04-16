import React, {Component} from 'react'
import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import Loading from 'react-loading-animation'

const Wrapper = styled.section``

class NewsSlide extends Component {
  constructor(props){
    super(props)
}

  render () {
    
    const { data } = this.props
   // console.log('SLIDER-data...: ', data)
   // console.log('data.length:..', data.length)
    

    var settings = {
        mixins: [Carousel.ControllerMixin],
        swiping:true,
        wrapAround: true,
        autoplay: true,
        autoplayInterval:5000,
    };
    const isFetching=true

    return (
        <Wrapper >
            {
                //data.length === 0 ?  <Loading/> :  null  
             //<div><pre style={{ textAlign: 'left'}}>{JSON.stringify(data, null, 2) }</pre></div>  
//<Carousel {...settings} style="heigth:300px">
            }
            <Carousel>
                {data.map(x =>
                        
                    <a href={`detail/${x.idPost}`} key={x.idPost}><img src={x.slider} alt='' style={{width:'938px', height:'300px'}} /></a>
                )}
                
            </Carousel>
        </Wrapper>
    )
  }
}
export default NewsSlide;