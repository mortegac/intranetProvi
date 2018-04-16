import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import title from './images/encab-noticias.png'


//style={{ maxHeight: '95px'}}

const Wrapper = styled.section`
display:flex;
Flex-direction:column;
background: papayawhip;
justify_content:space-around;
`;

class NewsList extends Component {
  constructor(props){
    super(props)
    const { fetchNews } = this.props
    // console.log(' :: fetchNews()  :: ', this.props)
    fetchNews()
}
  render () {
    const {newsr, fetchNews} = this.props
    return (
        <Wrapper>
          <div><img src={title} alt="Listado de Noticias" style={{ width: '550px'}}/></div>
          <div><pre style={{ textAlign: 'left'}}>{JSON.stringify(newsr.data, null, 2) }</pre></div>
        </Wrapper>
    )
  }
}


const mapStateToProps = state => {
  return { ...state, }
}

const mapDispatchToProps = dispatch => ({ 
    fetchNews: () => dispatch({ type: 'FETCH_NEWS' }),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsList)



// export default NewsList;

