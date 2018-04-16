import { takeEvery } from 'redux-saga/effects'
import actionNews from '../components/newsList/sagas.action'
import actionWeather from '../components/icoWeather/sagas.action'

export default function* rootSagas(){
 
    yield takeEvery('FETCH_NEWSLIST', actionNews.fetch)
    yield takeEvery('FETCH_NEWDETAIL', actionNews.fetchDetail)
    yield takeEvery('FETCH_WEATHER', actionWeather.fetch)
}