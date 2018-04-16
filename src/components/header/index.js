import React, {Component} from 'react';

import HeaderNav from '../headerNav/headerNav'
import HeaderLogo from '../headerLogo/headerLogo'
import HeaderBanner from '../headerBanner/headerBanner'

import '../../utils/style.css';
// import HeaderBody from '../headerBody/headerBody'


class Header extends Component {
  render () {
    return (
      <div>
        <section className="header">
          <div className="row">
            <div className="row-left"><HeaderLogo></HeaderLogo></div>
            <div className="row-rigth"><HeaderBanner></HeaderBanner></div>
          </div>
            
        </section>
        <HeaderNav></HeaderNav>
      </div>
    )
  }
}

export default Header;
