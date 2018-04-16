import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../utils/style.css';

//<li><a href="http://intranet2.providencia.cl/telefonos"  target="_blank" className="nav-item ">Teléfonos</a></li>
// <li><a href="http://intranet2.providencia.cl/galeria"  target="_blank" className="nav-item ">Galerías</a></li>
//Ê<li><Link to='/detail' className="nav-item " style={{ color: '#000'}}>Noticias</Link></li>

class HeaderMenu extends Component {
  render () {
    return (
        <div>
            <div className="nav">
                <ul>
                    <li><Link to='/' className="nav-item " style={{ color: '#000'}}>Inicio</Link></li>
                    <li><a href="http://101.1.1.17/airh/serhumano/" target="_blank" className="nav-item ">Mi Parrón</a></li>
                    
                    
                    <li><Link to='/sistemas' className="nav-item " style={{ color: '#000'}}>Sistemas</Link></li>
                    <li><Link to='/directorio' className="nav-item " style={{ color: '#000'}}>Teléfonos</Link></li>
                    <li><Link to='/sgm' className="nav-item " style={{ color: '#000'}}>Sistema de Gestión</Link></li>
                    {
                   // <li><Link to='/formatos' className="nav-item " style={{ color: '#000'}}>Documentos</Link></li>
                    }
                    
                </ul>  
                
                
            </div>
        </div>
    )
  }
}

export default HeaderMenu;
