
const initialState = {
    data : [],
    dataImages : [],
    fetching: false,
    creating: false,
}


export default function news (state = initialState, action) {
    // console.log('action:',action.payload)
    // console.log('state:',state)
  switch(action.type) {
      case 'FETCH_NEWS_START':
      return {
        ...state,
        fetching: true,
      }
     case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        fetching: false,
        data: action.payload.data,
        dataImages: action.payload.dataImage,
      }
     case 'FETCH_NEWS_FAILED':
      return {
        ...state,
        fetching: false,
        error: action.error
      }

      // case 'EDIT_NEWS':
      // return {
      //   ...state,
      //   data: state.data.filter(x =>  { return x.id == action.payload.id } )
      // }



      
      //DETAIL
      case 'FETCH_NEWDETAIL_START':
      return {
        ...state,
        fetching: true,
      }
      case 'FETCH_NEWDETAIL_SUCCESS':
      return {
        ...state,
        fetching: false,
        data: [action.payload]
      }
      case 'FETCH_NEWDETAIL_FAILED':
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