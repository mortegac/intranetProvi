import { call, put } from 'redux-saga/effects'
import axios from 'axios'

export default {
    * fetch() {
      yield put({ type: 'FETCH_NEWS_START' })
      try {
        // const NEWSResponse = yield call(axios.get, 'http://localhost/wp-json/wp/v2/posts/?per_page=10')
        const NEWSResponse = yield call(axios.get, 'http://intradmin.providencia.cl/wp-json/wp/v2/posts/?per_page=15')
        // console.log('REsponse Post: ', NEWSResponse)
        // yield put({ type: 'FETCH_NEWS_SUCCESS', payload: NEWSResponse.data.slice(0, 10) })
        yield put({ type: 'FETCH_NEWS_SUCCESS', payload: NEWSResponse.data })
      }catch(error) {
        yield put({ type: 'FETCH_NEWS_FAILED', error })
      }
  
    },
  }


  
  


// export default {
//     *fetch(){
//         yield put({ type: 'FETCH_NEWS_START' })
//         try{
//             //const NEWSResponse = yield call(axios.get, 'http://api.apixu.com/v1/current.json?key=f3a538bc4cb5421e8b7204406170111&q=santiago')
//             const NEWSResponse = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
//             console.log ('Response', NEWSResponse)
//             yield put({ type: 'FETCH_NEWS_SUCCESS', payload: NEWSResponse })

//         }catch(error){
//             yield put ({ type: 'FETCH_NEWS_FAILED'})
//         }
//     }
// }