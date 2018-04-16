
const initialState = {
    data : [],
    fetching: false,
    creating: false,
}


export default function weather (state = initialState, action) {
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
        data: [action.payload],
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