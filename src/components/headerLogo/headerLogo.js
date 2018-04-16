import React, {Component} from 'react'
import logo from './images/logo.png'
// import '../../App.css'

class HeaderLogo extends Component {
  render () {
    return (
        <a href="/">
              <img src={logo} alt="Intranet Municipalidad de Providencia" style={{ maxHeight: '95px'}}/>
            </a>
    )
  }
}

export default HeaderLogo;
