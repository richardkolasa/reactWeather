import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // return a new instance of state, don't mutate
    // combines flattens, and inserts new record at top:
      return [ action.payload.data, ...state ];
  }
  return state;
}

