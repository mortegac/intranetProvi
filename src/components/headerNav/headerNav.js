import React, {Component} from 'react';

import HeaderMenu from '../../components/headerMenu/'

import './headerNav.css';

class HeaderNav extends Component {
  render () {
    return (
        
            <nav className="nav" id="Nav-menu">
                <HeaderMenu></HeaderMenu>
            </nav>
        
            
    )
  }
}

export default HeaderNav;
