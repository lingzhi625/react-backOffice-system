import { totalState } from "../state";
import {
  SHOW_LOADING,
  HIDE_LOADING,
  CHANGE_ROUTER
} from "../actionTypes";

export default function reducers(state = totalState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false
      };
    case CHANGE_ROUTER:
        console.log('reducer', action)
      return {
        ...state,
        url: action.url
      };
    default:
      return state;
  }
}
