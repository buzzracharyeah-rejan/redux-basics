import { INCREASE, DECREASE, RESET, CHANGE_NAME } from "./actions";

// reducer
export const reducer = (state, action) => {
    // console.log({state, action})
    if(action.type === DECREASE) {
      return {...state, count: state.count - 1}
    } else if(action.type === INCREASE) {
      return {...state, count: state.count + 1}
    } else if(action.type === RESET) {
      return {...state, count: 0}
    } else if(action.type === CHANGE_NAME) { 
      return {...state, name: 'varbuzz'}
    }
    return state;
  }; 