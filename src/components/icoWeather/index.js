import React, {Component} from 'react'
import {connect} from 'react-redux'

// import icoSunny from './icoSunny'
import './icoWeather.css'

/**
 * Light rain
 * 
 */

// <h4 style={{ margin: '0', color:'#fff'}}>{x.location.name}</h4>
// </div>
 // weathers.data.map(x => 
            // <div style={{ textAlign: 'center'}}>
               
               
                // <h5 style={{ color:'#fff', margin:'0'}}>{x.current.condition.code} - {x.current.condition.text}</h5>
                // <h6 style={{ color:'#fff', margin:'0'}}>Humedad {x.current.humidity}%</h6>
                // <h2 style={{ color:'#fff', margin:'0'}}>{x.current.temp_c}°C</h2> 
                
                
//<div><pre style={{ textAlign: 'left'}}>{JSON.stringify(weathers, null, 2) }</pre></div>                 
                    //x.current.condition.code 
class IcoWeather extends Component {
    constructor(props){
        super(props)
        const { fetchWeathers } = this.props
        //console.log(' :: fetchHomes()  :: ', this.props.Homes)
        fetchWeathers()
    }
    render () {
        const {weathers} = this.props
        return (
        <div style={{ backgroundColor: '#4a4a4a' }}>
        
        
        { weathers.data.map(x => 
            <h5 style={{ color:'#fff', margin:'0'}}>{x.current.condition.code} - {x.current.condition.text}</h5>
        )}
                    <div className="icon sun-shower">
                        <div className="cloud"></div>
                        <div className="sun">
                            <div className="rays"></div>
                        </div>
                        <div className="rain"></div>
                    </div>

                    <div className="icon cloudy">
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                    </div>

        </div>
                

            
        
    
    
        

     
        )
    }
}

// export default IcoWeather;
const mapStateToProps = state => {
    return { ...state, }
  }
  
  const mapDispatchToProps = dispatch => ({ 
      fetchWeathers: () => dispatch({ type: 'FETCH_WEATHER' }),
  })
  export default connect(mapStateToProps, mapDispatchToProps)(IcoWeather)
  


  
    // <div><pre style={{ textAlign: 'left'}}>{JSON.stringify(homes.data, null, 2) }</pre></div>


    //sunny     -   SOLEADO    
    //     <div className="icon sunny">
    //         <div className="sun">
    //             <div className="rays"></div>
    //         </div>
    //     </div>
    //storm     -   TORMENTA    
    //     <div className="icon thunder-storm">
    //     <div className="cloud"></div>
    //     <div className="lightning">
    //             <div className="bolt"></div>
    //             <div className="bolt"></div>
    //         </div>
    //     </div>
    //cloudy  -  NUBLADO    
    //     <div className="icon cloudy">
    //         <div className="cloud"></div>
    //         <div className="cloud"></div>
    //     </div>
    //cloudy-rain   -   NUBLADO CON LLUVIA 
    //     <div className="icon sun-shower">
    //         <div className="cloud"></div>
    //         <div className="sun">
    //             <div className="rays"></div>
    //         </div>
    //         <div className="rain"></div>
    //     </div>
    //snow  -   NIEVE    
    //     <div className="icon flurries">
    //         <div className="cloud"></div>
    //         <div className="snow">
    //             <div className="flake"></div>
    //             <div className="flake"></div>
    //         </div>
    //     </div>
    //rain   -   LLUVIA    
    //     <div className="icon rainy">
    //         <div className="cloud"></div>
    //         <div className="rain"></div>
    //     </div>
    