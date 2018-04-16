import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import { reducer as modal } from 'redux-modal'

// import { routerReducer } from 'react-router-redux'
// import { reducer as formReducer } from 'redux-form'
//Reducer
import weatherReducer from '../components/icoWeather/reducer'
import newsReducer from '../components/newsList/reducer'



const rootReducers = combineReducers({

    loadingBar: loadingBarReducer,
    newsr: newsReducer,
    weathers: weatherReducer,
    modal:modal,

  })


export default rootReducers

