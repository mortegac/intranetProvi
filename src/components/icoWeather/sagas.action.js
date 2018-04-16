import { call, put } from 'redux-saga/effects'
import axios from 'axios'

export default {
    * fetch() {
      yield put({ type: 'FETCH_WEATHER_START' })
      try {
        //const NEWSResponse = yield call(axios.get, 'http://api.apixu.com/v1/current.json?key=f3a538bc4cb5421e8b7204406170111&q=santiago')
        const WeatherResponse = yield call(axios.get, 'http://api.apixu.com/v1/current.json?key=f3a538bc4cb5421e8b7204406170111&q=santiago')
        // console.log('WEATHER: ', WeatherResponse)
        // yield put({ type: 'FETCH_NEWS_SUCCESS', payload: NEWSResponse.data.slice(0, 10) })
        yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: WeatherResponse.data })
      }catch(error) {
        yield put({ type: 'FETCH_WEATHER_FAILED', error })
      }
  
    },
  }

