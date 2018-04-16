import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
    * fetch() {
      yield put({ type: 'FETCH_NEWS_START' })
      try {
        yield put(showLoading())
        // const Response        = yield call(axios.get, 'http://intradmin.providencia.cl/wp-json/wp/v2/posts/?per_page=6')
        //Con el ,flag ?_embed=1 traigo los link a las imagenes, no solo el id
        const Response        = yield call(axios.get, 'http://intradmin.providencia.cl/wp-json/wp/v2/posts/?_embed=1&per_page=10')
        var ImgSlide =[]
        //  ImgSlide = Response.data.map((x)=>{ return x._embedded } )
        //                          .filter((x)=> { return x['wp:featuredmedia'] != undefined }  )
        //                          .map((x)=>{ return x['wp:featuredmedia'][0] } )
        //                          .map((x)=>{ return [{ idPost: x.id, slider:x.source_url }] } )
        
        ImgSlide = Response.data.map((x)=>{ return { idPost: x.id, img:x._embedded['wp:featuredmedia'] } } )
                                .filter((x)=> { return x.img != undefined }  )
                                .map((x)=>{ return { idPost: x.idPost, slider:x.img[0].source_url } } )

        
        //const ResponseImages  = yield call(axios.get, 'http://intradmin.providencia.cl/wp-json/wp/v2/media')
        // console.log('ResponseImages: ', ResponseImages)
        //const imgPost = ResponseImages.data.map((x,i)=>{ return { id: x.id, url: x.source_url, idPost: x.post, sizesFull: x.media_details.sizes.full, sizesMedium: x.media_details.sizes.medium, sizesMediumLarge: x.media_details.sizes.medium_large, sizesThumbnail: x.media_details.sizes.thumbnail } })
        // console.log('Images: ', imgPost)
        
        yield put({ type: 'FETCH_NEWS_SUCCESS', payload: { ...Response, dataImage: ImgSlide},  })
        yield put(hideLoading())
      }catch(error) {
        yield put({ type: 'FETCH_NEWS_FAILED', error })
      }
  
    },
    * fetchDetail(payload) {
      // console.log('payload:  ', payload)
      // console.log('idPOst:  ', payload.id)
      yield put({ type: 'FETCH_NEWDETAIL_START' })
      try {
        yield put(showLoading())
        const Response        = yield call(axios.get, `http://intradmin.providencia.cl/wp-json/wp/v2/posts/${payload.payload.id}`)
        console.log('Response-IdPost: ', Response.data)
        
        yield put({ type: 'FETCH_NEWDETAIL_SUCCESS', payload: { ...Response.data},  })
        yield put(hideLoading())
      }catch(error) {
        yield put({ type: 'FETCH_NEWDETAIL_FAILED', error })
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