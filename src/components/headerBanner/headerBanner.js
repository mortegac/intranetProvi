
import React, {Component} from 'react'
import banner from './images/banners.png'

import '../../utils/style.css';

class HeaderBanner extends Component {
  render () {
    return (
        <img className="banner" src={banner} alt="Banners" style={{ maxHeight: '95px'}}/>
    )
  }
}

export default HeaderBanner;
