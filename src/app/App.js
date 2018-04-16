import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import LoadingBar from 'react-redux-loading-bar'

//Pages
import Header     from '../components/header'
import DetailPost from '../pages/detailPost/'
import Home       from '../pages/home/'
import System       from '../pages/system/'
import Sgm       from '../pages/sgm/'
import Employee from '../pages/employee/'
import Footer     from '../components/footer/'

//styles
import '../utils/style.css';

class App extends Component {
  render() {
    return (
        <div className='app' >
                 
          <LoadingBar />    
          <Header></Header>
        
            
          <section className="main">
            <Switch>  
              <Route exact path='/' component={Home} />
              <Route path='/detail/:id' component={DetailPost}/>
              <Route path='/sistemas' component={System}/>
              <Route path='/directorio' component={Employee}/>   
              <Route path='/sgm' component={Sgm}/>   
            </Switch>  
          </section>

          <Footer></Footer>
            
            
          
        </div>
    );
  }
}

export default App;



// import AdminPage  from '../pages/admin/'
// import Novedades  from '../components/novedades/novedades'
// import '../utils/app.css';
 

// <Route exact path='/administracion' component={AdminPage}/>

    // console.log("this.props: ", this.props)

//     <div className='app' >
//     <Header></Header>     
//     <Header></Header>     
//     <section className="main">
//         <Route exact path='/detail' component={DetailPost} />
//         <Route exact path='/' component={Home} />
//     </section>
//     <Footer></Footer>
    
  
// </div>

//component={DetailPost}
// //component={Home}/>
// <Route exact path='/' render={() => <Home/>}/>
// <Route path='/detail' render={() => <DetailPost/>}/>
// <Route path='/sistemas' render={() => <DetailPost/>}/>
// const mapStateToProps = state => {
//   return {
//     ...state,
//   }
// }



// const mapDispatchToProps = dispatch => ({

//   })

// export default connect(mapStateToProps, mapDispatchToProps)(App)



