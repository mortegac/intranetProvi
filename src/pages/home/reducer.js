
const initialState = {
    data : [],
    fetching: false,
    creating: false,
  }


/**
{
  "location": {
    "name": "Santiago",
    "region": "Region Metropolitana",
    "country": "Chile",
    "lat": -33.45,
    "lon": -70.67,
    "tz_id": "America/Santiago",
    "localtime_epoch": 1509570906,
    "localtime": "2017-11-01 18:15"
  },
  "current": {
    "last_updated_epoch": 1509570010,
    "last_updated": "2017-11-01 18:00",
    "temp_c": 16,
    "temp_f": 60.8,
    "is_day": 1,
    "condition": {
      "text": "Overcast",
      "icon": "//cdn.apixu.com/weather/64x64/day/122.png",
      "code": 1009
    },
    "wind_mph": 9.4,
    "wind_kph": 15.1,
    "wind_degree": 170,
    "wind_dir": "S",
    "pressure_mb": 1016,
    "pressure_in": 30.5,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 48,
    "cloud": 100,
    "feelslike_c": 16,
    "feelslike_f": 60.8
  }
}
 */


export default function home (state = initialState, action) {
    // console.log('action:',action.payload)
    // console.log('state:',state)
  switch(action.type) {
    case 'FETCH_WEATHER_START':
      return {
        ...state,
        fetching: true,
      }
     case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        fetching: false,
        data:[ action.payload],
      }
     case 'FETCH_WEATHER_FAILED':
      return {
        ...state,
        fetching: false,
        error: action.error
      }


    // case 'EDIT_POST':
    //   return {
    //     ...state,
    //     data: state.data.map(x => x.id === action.payload.id ? { ...x, ...action.payload } : x)
    //   }
    // case 'DELETE_POST':
    //   return {
    //     ...state,
    //     data: state.data.filter(x => x.id !== action.payload.id)
    //   }
    default:
      return state
  }
}